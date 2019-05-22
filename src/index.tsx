import React from 'react'
import ReactDOM from 'react-dom'
import { CamelCase } from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<CamelCase />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// #!/usr/bin/env bash

// if [ "$(uname)" == "Darwin" ]; then
//     echo Founded MAC Device. Please Contact Admin
// elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
//     os="Linux"
// elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
//     os="win32bit"
// elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
//     echo Win 64 bit
//     os="win64bit"
// fi

// echo "$os"
// if [ "$os" == "Linux" ]; then
// 	echo Linux
// 	#sudo apt-get update
// 	echo 'Update Completed...Continuing...Please wait..'
// 	if which node > /dev/null
// 	    then
//        		 echo "node is installed, skipping..."
// 		 echo "Installed node `node --version`"

// 		 echo ""
// 		 echo "sudo n stable "
// 	    else
//         	# add deb.nodesource repo commands
//         	# install node
// 		sudo apt-get install curl python-software-properties
// 		curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
// 		sudo apt-get install nodejs
// 		if which node > /dev/null
// 			then
// 				echo "`node -v ` is installed successfully"
// 		else
// 			echo "Error installing NodeJS. Try Again"
// 		fi
//     	fi
// fi
