// The MIT License (MIT)

// Copyright (c) 2015 Justin Poliachik

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

'use strict';

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { colors } from '../config.json';

 var Triangle = React.createClass({

   propTypes: {
     direction: React.PropTypes.oneOf(['up', 'right', 'down', 'left', 'up-right', 'up-left', 'down-right', 'down-left']),
     width: React.PropTypes.number,
     height: React.PropTypes.number,
     backgroundColor: React.PropTypes.string,
   },

   getDefaultProps: function() {
     return {
       direction: 'right',
       width: 0,
       height: 0,
       backgroundColor: colors.actionBlue,
     };
   },

   _borderStyles() {
     if (this.props.direction == 'up') {
       return {
         borderTopWidth: 0,
         borderRightWidth: this.props.width/2.0,
         borderBottomWidth: this.props.height,
         borderLeftWidth: this.props.width/2.0,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: this.props.backgroundColor,
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'right') {
       return {
         borderTopWidth: this.props.height/2.0,
         borderRightWidth: 0,
         borderBottomWidth: this.props.height/2.0,
         borderLeftWidth: this.props.width,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: this.props.backgroundColor,
       };
     } else if (this.props.direction == 'down') {
       return {
         borderTopWidth: this.props.height,
         borderRightWidth: this.props.width/2.0,
         borderBottomWidth: 0,
         borderLeftWidth: this.props.width/2.0,
         borderTopColor: this.props.backgroundColor,
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'left') {
       return {
         borderTopWidth: this.props.height/2.0,
         borderRightWidth: this.props.width,
         borderBottomWidth: this.props.height/2.0,
         borderLeftWidth: 0,
         borderTopColor: 'transparent',
         borderRightColor: this.props.backgroundColor,
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'up-left') {
       return {
         borderTopWidth: this.props.height,
         borderRightWidth: this.props.width,
         borderBottomWidth: 0,
         borderLeftWidth: 0,
         borderTopColor: this.props.backgroundColor,
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'up-right') {
       return {
         borderTopWidth: 0,
         borderRightWidth: this.props.width,
         borderBottomWidth: this.props.height,
         borderLeftWidth: 0,
         borderTopColor: 'transparent',
         borderRightColor: this.props.backgroundColor,
         borderBottomColor: 'transparent',
         borderLeftColor: 'transparent',
       };
     } else if (this.props.direction == 'down-left') {
       return {
         borderTopWidth: this.props.height,
         borderRightWidth: 0,
         borderBottomWidth: 0,
         borderLeftWidth: this.props.width,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: 'transparent',
         borderLeftColor: this.props.backgroundColor,
       };
     } else if (this.props.direction == 'down-right') {
       return {
         borderTopWidth: 0,
         borderRightWidth: 0,
         borderBottomWidth: this.props.height,
         borderLeftWidth: this.props.width,
         borderTopColor: 'transparent',
         borderRightColor: 'transparent',
         borderBottomColor: this.props.backgroundColor,
         borderLeftColor: 'transparent',
       };
     } else {
       console.error('Triangle.js wrong direction. ' + this.props.direction + ' is invalid. Must be one of: ' + ['up', 'right', 'down', 'left', 'up-right', 'up-left', 'down-right', 'down-left']);
       return {};
     }
   },

   render: function() {
     var borderStyles = this._borderStyles();
     return (
       <View style={[styles.triangle, borderStyles, this.props.style]}/>
     )
   },

 });

 var styles = StyleSheet.create({
   triangle: {
     width: 0,
     height: 0,
     backgroundColor: 'transparent',
     borderStyle: 'solid',
   },
 });

 module.exports = Triangle;