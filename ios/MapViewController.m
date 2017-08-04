//
//  MapViewController.m
//  wechat
//
//  Created by 杨小林 on 2017/7/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MapViewController, NSObject)

RCT_EXTERN_METHOD(writeFile:(NSString *)fileName withContents:(NSString *)contents errorCallback:(RCTResponseSenderBlock *)failureCallback callback:(RCTResponseSenderBlock *)successCallback)

RCT_EXTERN_METHOD(readFile:(NSString *)fileName errorCallback:(RCTResponseSenderBlock *)failureCallback callback:(RCTResponseSenderBlock *)successCallback)

@end
