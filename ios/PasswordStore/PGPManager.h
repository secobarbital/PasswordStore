#import "RCTBridgeModule.h"

#import <ObjectivePGP/ObjectivePGP.h>

@interface PGPManager : NSObject <RCTBridgeModule>

@property ObjectivePGP *pgp;

@end
