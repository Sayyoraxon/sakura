# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# sakura
# sakura
# sakura
# sakura




<div className='layout'
            onScroll={(e)=>setleft(e.target.scrollTop)}>

                <div className='parallax' id="parallax">
                    <div className='div1'
                        style={{top: `${width>1440 ? 177 : 30 -2*left}px`, left: width>1440 ? "440px" : "200px"}}
                    >
                        Ханами Сакура и фестиваль цветения сакуры в Японии
                    </div>
                    <div className='div2'
                        style={{top: `${width>1440 ? 177 : 30-2*left}px`, left: width>1440 ? "925px" : "700px"}}>
                        <button className="play-button">
                            <span className="play-icon"></span>
                        </button>
                    </div>
                    <img src={sun} alt="image" className='img1'
                        style={{ left: `${-178 + left * 1.5}px`, width: `${717 - left * 1.1}px`, top: width > 1440 ? "543px" : "250px" }} />
                    <img src={sakura} alt="image" className='img2'
                        style={{ width: `${717 - left * 2.2}px`, top: `${width > 1440 ? 538 : 250 + left * 0.3}px` }} />
                    <img src={shadow} alt="image" className='img3'
                        style={{ width: `${6470 - left * 10}px`, left: `${-2491 + left * 2.5}px`, top: `${width > 1440 ? 911 : 618 - left * 0.8}px` }} />
                    <img src={table} alt="image" className='img4'
                        style={{ left: `${1059 + left * 1.3}px`, width: `${499 - left * 1.1}px`, top: width > 1440 ? "718px" : "430px" }} />
                    <img src={mountain} alt="mountain" className='img5'
                        style={{ left: `${-2307 + left * 7.7}px`, top: `${width > 1440 ? 710 : 422 - left * 0.5}px`, width: `${2779 - left * 7}px` }} />
                    <img src={mountain1} alt="mountain" className='img6'
                        style={{ left: `${-1107 + left * 4.4}px`, top: `${width > 1440 ? 879 : 591 - left * 0.93}px`, width: `${1645 - left * 4.5}px` }} />
                    <img src={sakura1} alt="sakura" className='img7'
                        style={{ left: `${width > 1440 ? 1800 : 1400 - left * 2.2}px`, top: `${width > 1440 ? 638 : 350 - left * 0.6}px` }} />
                </div>
            </div>
# sakura
