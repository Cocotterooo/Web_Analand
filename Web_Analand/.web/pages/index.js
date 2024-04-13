/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, HoverCard as RadixThemesHoverCard, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



export function Button_cccdbe335b896f2299ac3dd79fef238b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`analand.net`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)", "cursor": "pointer"}, "transition": "1s", "border": "2px solid #FFCC00", "borderRadius": "0.6em", "backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "height": "100%"}} onClick={on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "paddingBottom": "0.6em"}} direction={`row`} gap={`2`}>
  <img alt={`Icono de servidor`} src={`/icons/context/prim_color/server.svg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1.2em", "color": "#fff"}}>
  {`analand.net`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesBox css={{"width": "100%", "align": "center"}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingLeft": "1em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de estado`} src={`/icons/context/sec_color/power.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB"}}>
  {`Estado:`}
</RadixThemesText>
  <Fragment>
  {isTrue(true) ? (
  <Fragment>
  <RadixThemesBadge className={``} color={`red`} radius={`large`} variant={`solid`}>
  {`Desconectado`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#fff"}}>
  {`Desconectado`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de jugadores`} src={`/icons/context/sec_color/users-round.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB"}}>
  {`Jugadores:`}
</RadixThemesText>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge className={``} color={`red`} radius={`large`} variant={`solid`}>
  {`N/A`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#FFCC00"}}>
  {`N/A`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de actividad`} src={`/icons/context/sec_color/square-activity.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB"}}>
  {`Actividad:`}
</RadixThemesText>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge className={``} color={`red`} radius={`large`} variant={`solid`}>
  {`N/A`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#FFCC00"}}>
  {`N/A`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Link_5055165fe84055e7b7cd3c41e380c208 () {



  return (
    <RadixThemesLink asChild={true} css={{"padding": "1em", "paddingRight": "1.2em", "height": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://discord.gg/pZQMW64sYT`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "paddingBottom": "0.6em"}} direction={`row`} gap={`2`}>
  <img alt={`Logo de Discord`} css={{"height": "1.5em"}} src={`/icons/social/discord-logo-white.svg`}/>
</RadixThemesFlex>
  <RadixThemesBox css={{"width": "100%", "align": "center"}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "marginBottom": "1em", "paddingLeft": "1em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de Usuarios`} src={`/icons/context/sec_color/users-round.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB"}}>
  {`Miembros:`}
</RadixThemesText>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge className={``} color={`red`} radius={`large`} variant={`solid`}>
  {`N/A`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#5865F2"}}>
  {`N/A`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Icono de jugadores`} src={`/icons/context/sec_color/shield.svg`}/>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB"}}>
  {`Staff Online:`}
</RadixThemesText>
  <Fragment>
  {isTrue(false) ? (
  <Fragment>
  <RadixThemesBadge className={``} color={`red`} radius={`large`} variant={`solid`}>
  {`N/A`}
</RadixThemesBadge>
</Fragment>
) : (
  <Fragment>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#5865F2"}}>
  {`N/A`}
</RadixThemesText>
</Fragment>
)}
</Fragment>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesText align={`center`} as={`p`} className={`blink1_5`} css={{"color": "#fff", "fontSize": "1em", "fontWeight": "200"}}>
  {`¡Únete a nuestro Discord!`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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
  <RadixThemesBox css={{"marginTop": "0.3em", "marginBottom": "0.3em", "marginInlineStart": "0.6em", "marginInlineEnd": "0.6em"}}>
  <RadixThemesLink asChild={true} css={{"width": "1.5em", "color": "#fff", "fontSize": "1.5em", "&:hover": {"underline": "none"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`2`}>
  <img alt={`Logotipo de Analand Super formando un cuadrado a su vez
                    formado por cuatro cuadrados amarillos en distintas tonalidades, 
                    con la letra 'A' mezclada con una N hecha con la transparencia de los cuadrados del logotipo`} css={{"width": "2em", "height": "auto", "marginBottom": "0.05em"}} src={`/logotipo.svg`}/>
  <RadixThemesFlex align={`start`} css={{"width": "auto"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} trim={`both`}>
  {`ANALAND`}
</RadixThemesText>
  <RadixThemesText as={`p`} trim={`both`}>
  {`SUPER`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`5`}>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Montserrat", "letterSpacing": "0.05em", "fontWeight": "350", "color": "#CBCBCB", "fontSize": "1.2em", "transition": "0.4s", "&:hover": {"underline": "none", "color": "#fff"}}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img alt={`Icono de inicio`} src={`/icons/context/sec_color/home.svg`}/>
  <RadixThemesText as={`p`}>
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
</RadixThemesBox>
  <RadixThemesBox css={{"marginInlineStart": "1.2em", "marginInlineEnd": "1.2em", "@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesBox css={{"backgroundColor": "#5865F2", "padding": "0.6em", "borderRadius": "0.3em", "align": "center"}}>
  <RadixThemesLink asChild={true}>
  <NextLink href={`https://discord.gg/pZQMW64sYT`} passHref={true}>
  <img alt={`Botón de Discord`} css={{"height": "auto", "width": "5em"}} src={`/icons/social/discord-logo-white.svg`}/>
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
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
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "2em", "fontFamily": "Montserrat", "textAlign": "center", "fontWeight": "300"}}>
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
  <RadixThemesFlex align={`center`} css={{"width": "100%"}} direction={`column`} justify={`center`} gap={`2`}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "maxWidth": "650px", "textAlign": "center", "fontFamily": "Comfortaa", "fontWeight": "50", "paddingInline": "1em", "color": "#CBCBCB"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "Montserrat", "fontWeight": "300", "letterSpacing": "0.1em", "fontSize": "2em", "color": "#fff"}}>
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
