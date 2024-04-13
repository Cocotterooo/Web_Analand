/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
<<<<<<< HEAD
import { ActivityIcon as LucideActivityIcon, PowerIcon as LucidePowerIcon, ServerIcon as LucideServerIcon, UserRoundIcon as LucideUserRoundIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
=======
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



<<<<<<< HEAD
export function Button_f48d1daf80ba93a2a1fa35f13f10659f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`analand.net`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "height": "100%", "borderRadius": "0.6em", "border": "2px solid #FFCC00", "&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}} onClick={on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingBottom": "0.6em"}} direction={`row`} gap={`2`}>
  <LucideServerIcon css={{"color": "#fff", "width": "2em", "height": "2em"}}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#fff"}}>
  {`analand.net`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em"}} direction={`row`} gap={`2`}>
  <LucidePowerIcon css={{"color": "#CBCBCB"}}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Estado:`}
</RadixThemesText>
  <RadixThemesBadge color={`red`} variant={`solid`}>
  {`Desconectado`}
</RadixThemesBadge>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em"}} direction={`row`} gap={`2`}>
  <LucideUserRoundIcon css={{"color": "#CBCBCB"}}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Jugadores:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#FFCC00"}}>
  {`0`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em"}} direction={`row`} gap={`2`}>
  <LucideActivityIcon css={{"color": "#CBCBCB"}}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Actividad:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#FFCC00"}}>
  {`0%`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Fragment_3ea1a0318ded176a3888f943242093c6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_98de621841ab9d38da4d53ad76aff828 () {



  return (
    <RadixThemesLink asChild={true} css={{"padding": "1em", "paddingRight": "1.2em", "height": "100%", "borderRadius": "0.6em", "border": "2px solid #5865F2", "backgroundColor": "rgba(0, 0, 0, 0.3)", "&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://discord.gg/pZQMW64sYT`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingBottom": "0.6em", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <img css={{"width": "2em", "height": "2em", "color": "#5865F2"}} src={`/icons/social/discord.svg`}/>
=======
export function Button_5cf73f492da9de395ec1f03e9a298543 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`analand.net`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8} sx={{"backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "height": "auto", "borderRadius": "0.6em", "border": "2px solid #FFCC00", "_hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}}>
  <VStack alignItems={`start`} sx={{"width": "100%"}}>
  <HStack sx={{"width": "100%", "paddingBottom": "0.6em"}}>
  <LucideServerIcon css={{"color": "#fff", "width": "2em", "height": "2em"}}>
  {`server`}
</LucideServerIcon>
  <Text sx={{"fontSize": "1em", "color": "#fff"}}>
  {`analand.net`}
</Text>
</HStack>
  <HStack sx={{"paddingLeft": "1em"}}>
  <LucidePowerIcon css={{"color": "#CBCBCB"}}>
  {`power`}
</LucidePowerIcon>
  <Text as={`span`} sx={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Estado:`}
</Text>
  <Badge colorScheme={`red`} variant={`solid`}>
  {`Desconectado`}
</Badge>
</HStack>
  <HStack sx={{"paddingLeft": "1em"}}>
  <LucideUserRoundIcon css={{"color": "#CBCBCB"}}>
  {`user-round`}
</LucideUserRoundIcon>
  <Text as={`span`} sx={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Jugadores:`}
</Text>
  <Text as={`span`} sx={{"color": "#FFCC00"}}>
  {`0`}
</Text>
</HStack>
  <HStack sx={{"paddingLeft": "1em"}}>
  <LucideActivityIcon css={{"color": "#CBCBCB"}}>
  {`activity`}
</LucideActivityIcon>
  <Text as={`span`} sx={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Actividad:`}
</Text>
  <Text as={`span`} sx={{"color": "#FFCC00"}}>
  {`0%`}
</Text>
</HStack>
</VStack>
</Button>
  )
}

export function Link_b13f67ec330ed40dfd4a8a38853cc4e9 () {


  return (
    <RadixThemesLink asChild={true} css={{"backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "height": "100%", "borderRadius": "0.6em", "border": "2px solid #5865F2", "&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://discord.gg/pZQMW64sYT`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingBottom": "0.6em", "alignItems": "center", "flexDirection": "row"}} gap={`2`}>
  <img css={{"width": "2em", "height": "2em", "color": "#5865F2"}} src={`/icons/discord.svg`}/>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#fff"}}>
  {`¡Nuestro Discord!`}
</RadixThemesText>
</RadixThemesFlex>
<<<<<<< HEAD
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em"}} direction={`row`} gap={`2`}>
  <LucideUserRoundIcon css={{"color": "#CBCBCB"}}/>
=======
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em", "flexDirection": "row"}} gap={`2`}>
  <LucideUserRoundIcon css={{"color": "#CBCBCB"}}>
  {`user-round`}
</LucideUserRoundIcon>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Usuarios:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#5865F2"}}>
  {`0`}
</RadixThemesText>
</RadixThemesFlex>
<<<<<<< HEAD
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em"}} direction={`row`} gap={`2`}>
  <LucideActivityIcon css={{"color": "#CBCBCB"}}/>
=======
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em", "flexDirection": "row"}} gap={`2`}>
  <LucideActivityIcon css={{"color": "#CBCBCB"}}>
  {`activity`}
</LucideActivityIcon>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Online:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#5865F2"}}>
  {`0`}
</RadixThemesText>
</RadixThemesFlex>
<<<<<<< HEAD
</RadixThemesFlex>
  <RadixThemesText as={`p`} className={`blink`} css={{"color": "#fff", "fontSize": "0.8em"}}>
=======
  <RadixThemesText as={`p`} css={{"color": "#fff", "fontWeight": "100", "paddingTop": "0.6em"}}>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  {`¡Únete a la comunidad!`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

<<<<<<< HEAD
export function Fragment_34f041f6aae0b1134e0b2a186d19d162 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

<<<<<<< HEAD
const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


=======
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_3ea1a0318ded176a3888f943242093c6/>
</div>
  <Fragment_34f041f6aae0b1134e0b2a186d19d162/>
</Fragment>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#151515"}} direction={`column`} gap={`2`}>
  <RadixThemesBox css={{"background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/galeria/galeria_webp/cueva_elevador.webp') center/cover no-repeat", "backgroundAttachment": "fixed", "@media screen and (min-width: 0)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 30em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 48em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 62em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 80em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "width": "100%", "height": "100%", "marginBottom": "1.2em", "borderBottom": "1px solid #FFCC00"}}>
  <RadixThemesFlex align={`center`} css={{"borderTop": "1px solid #FFCC00", "background": "#151515", "position": "sticky", "paddingRight": "1.5em", "paddingTop": "0.3em", "paddingBottom": "0.3em", "zIndex": "999", "top": "0", "width": "100%"}} direction={`row`} gap={`2`}>
=======
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <VStack sx={{"backgroundColor": "#151515"}}>
  <RadixThemesBox css={{"background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/galeria/cueva_elevador.png') center/cover no-repeat", "backgroundAttachment": "fixed", "@media screen and (min-width: 0)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 30em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 48em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 62em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 80em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "width": "100%", "height": "100%", "borderBottom": "1px solid #FFCC00"}}>
  <HStack sx={{"borderTop": "1px solid #FFCC00", "background": "#151515", "position": "sticky", "paddingRight": "1.5em", "paddingTop": "0.3em", "paddingBottom": "0.3em", "zIndex": "999", "top": "0", "width": "100%"}}>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <Link as={NextLink} href={`/`} sx={{"width": "10%", "color": "#fff", "fontSize": "1.5em", "margin": "0.3em", "marginLeft": "0.6em", "_hover": {"underline": "none"}}}>
  <HStack>
  <ChakraImage alt={`Logotipo de Analand Super formado por un cuadrado a su vez
                    formado por cuatro cuadrados amarillos en distintas tonalidades, 
                    con la letra A mezclada con una N hecha con la transparencia de los cuadrados del logotipo`} src={`/logotipo.svg`} sx={{"width": "2em", "height": "auto", "marginBottom": "0.05em"}}/>
  <Heading sx={{"fontSize": "lg", "fontFamily": "Montserrat", "fontWeight": "bold"}}>
  {`ANALAND SUPER`}
</Heading>
</HStack>
</Link>
<<<<<<< HEAD
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`5`}>
=======
  <Spacer/>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`5`}>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <Box>
  <Link as={NextLink} href={`/`} sx={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "250", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "_hover": {"underline": "none", "color": "#fff"}}}>
  {`Inicio`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "350", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "&:hover": {"underline": "none", "color": "#fff"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Icono de tienda`} src={`/icons/context/sec_color/store.svg`}/>
  <RadixThemesText as={`p`}>
  {`Tienda`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "350", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "&:hover": {"underline": "none", "color": "#fff"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Icono de blog`} src={`/icons/context/sec_color/book-marked.svg`}/>
  <RadixThemesText as={`p`}>
  {`Blog`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "350", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "&:hover": {"underline": "none", "color": "#fff"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Icono de nosotros`} src={`/icons/context/sec_color/users-round.svg`}/>
  <RadixThemesText as={`p`}>
  {`Nosotros`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "350", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "&:hover": {"underline": "none", "color": "#fff"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Icono de reglas`} src={`/icons/context/sec_color/scale.svg`}/>
  <RadixThemesText as={`p`}>
  {`Normas`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <img alt={`Icono del menú de navegación`} css={{"height": "auto", "width": "1.5em"}} src={`/icons/context/prim_color/menu.svg`}/>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content css={{"backgroundColor": "#151515", "border": "2px solid #3d3d3d"}}>
  <RadixThemesDropdownMenu.Item css={{"color": "#CBCBCB"}}>
  <RadixThemesLink asChild={true} css={{"color": "#CBCBCB", "&:hover": {"color": "#FFCC00"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de inicio`} css={{"height": "auto"}} src={`/icons/context/sec_color/home.svg`}/>
  <RadixThemesText as={`p`}>
  {`Inicio`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"color": "#CBCBCB"}}>
  <RadixThemesLink asChild={true} css={{"color": "#CBCBCB", "&:hover": {"color": "#FFCC00"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de tienda`} css={{"height": "auto"}} src={`/icons/context/sec_color/store.svg`}/>
  <RadixThemesText as={`p`}>
  {`Tienda`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"color": "#CBCBCB"}}>
  <RadixThemesLink asChild={true} css={{"color": "#CBCBCB", "&:hover": {"color": "#FFCC00"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de blog`} css={{"height": "auto"}} src={`/icons/context/sec_color/book-marked.svg`}/>
  <RadixThemesText as={`p`}>
  {`Blog`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"color": "#CBCBCB"}}>
  <RadixThemesLink asChild={true} css={{"color": "#CBCBCB", "&:hover": {"color": "#FFCC00"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de usuarios`} css={{"height": "auto"}} src={`/icons/context/sec_color/users-round.svg`}/>
  <RadixThemesText as={`p`}>
  {`Nosotros`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item css={{"color": "#CBCBCB"}}>
  <RadixThemesLink asChild={true} css={{"color": "#CBCBCB", "&:hover": {"color": "#FFCC00"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de Normas`} css={{"height": "auto"}} src={`/icons/context/sec_color/scale.svg`}/>
  <RadixThemesText as={`p`}>
  {`Normas`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Separator css={{"border": "1px solid #FFCC00"}}/>
  <RadixThemesDropdownMenu.Item css={{"color": "#fff"}}>
  {`Iniciar Sesión`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} css={{"padding": "1em", "width": "100%", "height": "85vh"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"color": "white"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "2em", "fontFamily": "Montserrat", "fontWeight": "300", "textAlign": "center"}}>
=======
</Box>
</HStack>
  <RadixThemesFlex align={`center`} css={{"padding": "1em", "width": "100%", "height": "85vh"}} direction={`column`} justify={`center`}>
  <RadixThemesText as={`p`} css={{"textAlign": "center", "letterSpacing": "0.1em", "fontSize": "2em", "color": "white", "fontFamily": "Montserrat", "fontWeight": "300"}}>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  {`BIENVENIDO A `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "2em", "fontFamily": "Montserrat", "textAlign": "center", "fontWeight": "400"}}>
  {`ANALAND SUPER™`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "1.5em", "fontFamily": "Montserrat", "textAlign": "center", "marginTop": "1.5em", "fontWeight": "200", "fontStyle": "italic"}}>
  {`TU DIVERSIÓN, ES NUESTRA PASIÓN EN CADA DETALLE`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex css={{"marginTop": "5em"}} justify={`center`} gap={`4`}>
  <RadixThemesHoverCard.Root>
  <RadixThemesHoverCard.Trigger>
  <RadixThemesFlex>
  <Button_cccdbe335b896f2299ac3dd79fef238b/>
</RadixThemesFlex>
</RadixThemesHoverCard.Trigger>
  <RadixThemesHoverCard.Content css={{"fontSize": "0.8em", "color": "#fff", "backgroundColor": "#151515", "border": "2px solid #3d3d3d", "borderRight": "2px solid #FFCC00", "width": "100%", "align": "center", "padding": "1em"}}>
  <RadixThemesText as={`p`}>
  {`Al hacer click se copiará la IP: `}
  <RadixThemesStrong css={{"color": "#FFCC00"}}>
  {`analand.net`}
</RadixThemesStrong>
  {` en tu portapapeles`}
</RadixThemesText>
</RadixThemesHoverCard.Content>
</RadixThemesHoverCard.Root>
  <RadixThemesHoverCard.Root>
  <RadixThemesHoverCard.Trigger>
  <RadixThemesButton css={{"&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s", "backgroundColor": "rgba(0, 0, 0, 0.3)", "borderRadius": "0.6em", "border": "2px solid #5865F2", "paddingInlineStart": "0px !important", "paddingInlineEnd": "0px !important", "height": "100%"}}>
  <Link_5055165fe84055e7b7cd3c41e380c208/>
</RadixThemesButton>
</RadixThemesHoverCard.Trigger>
  <RadixThemesHoverCard.Content css={{"fontSize": "0.8em", "color": "#fff", "backgroundColor": "#151515", "border": "2px solid #3d3d3d", "borderRight": "2px solid #FFCC00", "width": "100%", "align": "center", "padding": "1em"}}>
  <RadixThemesText as={`p`}>
  {`¡Al hacer click serás redirigido a nuestro Discord!`}
</RadixThemesText>
</RadixThemesHoverCard.Content>
</RadixThemesHoverCard.Root>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"marginTop": "2em", "@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesHoverCard.Root>
  <RadixThemesHoverCard.Trigger>
  <RadixThemesFlex>
  <Button_cccdbe335b896f2299ac3dd79fef238b/>
</RadixThemesFlex>
</RadixThemesHoverCard.Trigger>
  <RadixThemesHoverCard.Content css={{"fontSize": "0.8em", "color": "#fff", "backgroundColor": "#151515", "border": "2px solid #3d3d3d", "borderRight": "2px solid #FFCC00", "width": "100%", "align": "center", "padding": "1em"}}>
  <RadixThemesText as={`p`}>
  {`Al hacer click se copiará la IP: `}
  <RadixThemesStrong css={{"color": "#FFCC00"}}>
  {`analand.net`}
</RadixThemesStrong>
  {` en tu portapapeles`}
</RadixThemesText>
</RadixThemesHoverCard.Content>
</RadixThemesHoverCard.Root>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} direction={`column`} justify={`center`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "maxWidth": "650px", "textAlign": "center", "fontFamily": "Comfortaa", "fontWeight": "50", "paddingInline": "1em", "color": "#CBCBCB", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"flexDirection": "column"}} gap={`2`}>
  <Text sx={{"fontFamily": "Montserrat", "fontWeight": "300", "letterSpacing": "0.1em", "fontSize": "2em", "color": "#fff"}}>
  {`Nuestro Enfoque`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontFamily": "Montserrat", "fontWeight": "200", "fontStyle": "italic", "letterSpacing": "0.1em", "textAlign": "center", "fontSize": "1.2em", "color": "#fff"}}>
  {`LA CALIDAD ES NUESTRA PRIORIDAD`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"marginTop": "2em", "marginBottom": "1.5em"}}>
  {`Bienvenido a `}
  <RadixThemesStrong>
  {`Analand Super™`}
</RadixThemesStrong>
  {` un proyecto que crece cada día más y más para ofrecerte la`}
  <RadixThemesStrong>
  {` mejor experiencia`}
</RadixThemesStrong>
  {` en el mundo de Minecraft que podamos darte. Nuestra prioridad es que te`}
  <RadixThemesStrong>
  {` diviertas y disfrutes`}
</RadixThemesStrong>
  {` de cada detalle sin abusar de nuestros usuarios económicamente.`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`🌟`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"marginTop": "1.5em", "marginBottom": "1.5em"}}>
  {`En esta web podrás encontrar`}
  <RadixThemesStrong>
  {` nuestra tienda`}
</RadixThemesStrong>
  {`, las reglas, las`}
  <RadixThemesStrong>
  {` últimas novedades`}
</RadixThemesStrong>
  {` y algunas estadísticas sobre Analand y sus usuarios. :)`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`✨ ¡Esperamos que lo disfrutes! ✨`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Analand Super | Servidor de Minecraft Premium y No Premium`}
</title>
  <meta content={`Analand es un servidor de Minecraft Supervivencia con economía, eventos, minijuegos y mucho más. Nos esforzamos para hacer la experiencia inigualable.`} name={`description`}/>
  <meta content={`/preview.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
