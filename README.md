# PostureTracker

Demo: https://evandaley.github.io/webcam-posture-tracker/

Capture pose data through the webcam with TensorFlow and OpenPose.  

## Next steps
- I'd like to add Google Sign-In and post the skeletal data to a firestore database. 
- Then we can consume that in other future apps for alerting ("hey, your posture is bad right now :P") and reporting ("you spent 10 hours at the computer today and your posture was bad the whole time. XD").

## How to use it
Ideally, just visit the website on your phone or a spare laptop and have that pointed at you from a distance. 

Live site: https://evandaley.github.io/webcam-posture-tracker/

If the camera is head on, you won't get much data. 
![Head On](profile.png)


Ideally, you want it from the side and like 8-10 feet away.
![Side View](side-view.png)

## Run locally
If you want to run this locally, you can do that with
```
yarn install
yarn run dev
```

Deploy to github pages with
```
yarn run ship
```

Enjoy!