import style from 'main.less';
import fonts from 'common/fonts';

const appContainer = document.getElementById("react-container");
import global_style from './main';

import React from 'react';
import {render} from 'react-dom';
import Root from './modules/root';

render( <Root />, appContainer);
