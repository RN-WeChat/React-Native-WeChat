//
//  MapViewController.swift
//  wechat
//
//  Created by 杨小林 on 2017/7/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

@objc(MapViewController)

class MapViewController: UIViewController {
  
    var mapView: MKMapView!
  
    override func viewDidLoad() {
        super.viewDidLoad()
      
      self.mapView = MKMapView(frame: CGRect(x: 0, y: 60, width: self.view.frame.width, height: self.view.frame.height - 80))
      
      self.view.addSubview(mapView)
      
      self.mapView.mapType = MKMapType.standard
      
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
  
  
  @objc func addEvent(name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
  }
  
}
