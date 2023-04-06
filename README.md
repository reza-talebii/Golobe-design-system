# golobe-design-system

https://www.npmjs.com/package/golobe-design-system

[![NPM](https://img.shields.io/npm/v/golobe-design-system.svg)](https://www.npmjs.com/package/golobe-design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save golobe-design-system
```

## Usage

```tsx
import React, { Component } from "react";

import { ButtonUi } from "golobe-ui";

class Example extends Component {
  render() {
    return <ButtonUi />;
  }
}
```

## style & theme

```tsx
import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import {GlobalStyle , antdThemeToken,antdThemeComponents ,DefaultTheme} from 'golobe-ui'

class Example extends Component {
  render() {
    return <>
       <ConfigProvider theme={antdTheme}>
        <ThemeProvider theme={styledComponentsTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    <>
  }
}
```

## License

MIT © [reza-talebii](https://github.com/reza-talebii)
