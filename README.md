# PostureTracker

Capture pose data through the webcam with TensorFlow and OpenPose.  

Demo: https://evandaley.github.io/webcam-posture-tracker/

## Next steps
- I'd like to add Google Sign-In and post the skeletal data to a firestore database (in progress). 
- Then we can consume that in other future apps for alerting ("your posture is bad now") and reporting ("your posture was bad for ten hours").

## How to use it
Ideally, just visit the website on your phone or a spare laptop and have that pointed at you from a distance. 

Live site: https://evandaley.github.io/webcam-posture-tracker/

If the camera is head on, you won't get much data. 
![Head On](profile.png)


Ideally, you want it from the side and like 8-10 feet away.
![Side View](side-view.png)

Once I get the backend stuff set up (probably next weekend), you'll be able to use multiple devices (1 for tracking, 1 to view metrics or receive alerts).
![diagram](humanoid_2.png)

## Run locally
If you want to run this locally, you can do that with
```
cd pose_tracking_web_app
yarn install
yarn run dev
```

Deploy to github pages with
```
yarn run ship
```

Enjoy!
