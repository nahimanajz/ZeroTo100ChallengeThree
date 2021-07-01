# ZeroTo100ChallengeThree
Hi,👋🏿 This is the 3rd challenge of zeroTo100 which shows
`photos` regarding to their  `albumId` 
## Developer Installation Guide
Clone [This](https://github.com/nahimanajz/ZeroTo100ChallengeThree.git) repository 
```
cd ZeroTo100ChallengeThree/frontend
npm install
npm start
```
## To test backend&frontend locally you need to:
```
cd ZeroTo100ChallengeThree/ 
npm install 
npm start
cd frontend/ && npm install
npm start
```
in `frontend/src/App.js` change 
```
const{data}= await axios.get(`https://royal-moose-03185.herokuapp.com/api/v1/album/${this.state.albumId}`);
```  
to
``` 
const{data}= await axios.get(`http://127.0.0.1:5000/api/v1/album/${this.state.albumId}`);
```
Click [here](https://zeroto100challenge3.netlify.app/) to visit actual website
