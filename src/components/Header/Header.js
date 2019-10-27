import React from 'react'
import { Box, Button, Grommet, Layer, Text } from "grommet";
import { Menu } from 'grommet-icons'
function Header() {
    return (
        <Box fill style={{ minWidth: "378px", position: "fixed", zIndex: 10001 }}>
          <Box
            pad="xsmall"
            direction="row"
            align="center"
            as="header"
            elevation="small"
            justify="between"
            background={{"opacity":"strong","color":"black","position":"center","dark":true}}
          >
            <Text size="xxlarge" margin={{ left: "small" }}>Akiradj.com Public Cloud</Text>
            <Button icon={<Menu size="medium" />} />
          </Box>
        </Box>
    )
}

export default Header
