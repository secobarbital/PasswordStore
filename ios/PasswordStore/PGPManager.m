#include "PGPManager.h"

@implementation PGPManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (instancetype)init
{
  self = [super init];
  if (self) {
    self.pgp = [[ObjectivePGP alloc] init];
  }
  return self;
}

RCT_EXPORT_METHOD(importKeysFromURL:(NSURL *)url allowDuplicates:(BOOL)duplicates)
{
  NSData *data = [NSData dataWithContentsOfURL:url];
  [self.pgp importKeysFromData:data allowDuplicates:duplicates];
}

RCT_EXPORT_METHOD(encryptFileFromURL:(NSURL *)url usingPublicKey:(NSString *)identifier responseBlock:(RCTResponseSenderBlock)callback)
{
  NSError *error;
  NSData *data = [NSData dataWithContentsOfURL:url];
  PGPKey *keyToEncrypt = [self.pgp getKeyForIdentifier:identifier type:PGPKeyPublic];
  
  NSData *encryptedData = [self.pgp encryptData:data usingPublicKey:keyToEncrypt armored:YES error:&error];
  if (encryptedData && !error) {
    NSLog(@"encryption success");
    NSString *encryptedString = [[NSString alloc] initWithData:encryptedData encoding:NSUTF8StringEncoding];
    callback(@[[NSNull null], encryptedString]);
  }
}

@end
