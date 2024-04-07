/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Link as RadixThemesLink, ScrollArea as RadixThemesScrollArea, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Badge, Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
import { ActivityIcon as LucideActivityIcon, PowerIcon as LucidePowerIcon, ServerIcon as LucideServerIcon, UserRoundIcon as LucideUserRoundIcon } from "lucide-react"
import NextLink from "next/link"
import NextHead from "next/head"



export function Button_0a88c4dc3b1be9a57f5ff37ae07d7665 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`analand.net`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_a9b4a20edc8c9ec69de1d84b4ff5c3d8} sx={{"backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "minWidth": "15%", "height": "auto", "borderRadius": "0.6em", "border": "2px solid #FFCC00", "_hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}}>
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

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
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

export function Link_dc08c4d912f2a218215936c559eb48f2 () {


  return (
    <RadixThemesLink asChild={true} css={{"backgroundColor": "rgba(0, 0, 0, 0.3)", "padding": "1em", "paddingRight": "1.2em", "minWidth": "15%", "height": "100%", "borderRadius": "0.6em", "border": "2px solid #5865F2", "&:hover": {"backgroundColor": "rgba(0, 0, 0, 0.65)"}, "transition": "1s"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://discord.gg/pZQMW64sYT`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "paddingBottom": "0.6em", "alignItems": "center", "flexDirection": "row"}} gap={`2`}>
  <img css={{"width": "2em", "height": "2em", "color": "#5865F2"}} src={`/icons/discord.svg`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#fff"}}>
  {`Nuestro Discord`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em", "flexDirection": "row"}} gap={`2`}>
  <LucideUserRoundIcon css={{"color": "#CBCBCB"}}>
  {`user-round`}
</LucideUserRoundIcon>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Usuarios:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#5865F2"}}>
  {`0`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "1em", "flexDirection": "row"}} gap={`2`}>
  <LucideActivityIcon css={{"color": "#CBCBCB"}}>
  {`activity`}
</LucideActivityIcon>
  <RadixThemesText as={`p`} css={{"color": "#CBCBCB", "fontWeight": "100"}}>
  {`Online:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#5865F2"}}>
  {`0`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <VStack>
  <RadixThemesScrollArea css={{"backgroundColor": "#1A1A1A", "height": "100vh"}} scrollbars={`vertical`} type={`hover`}>
  <RadixThemesBox css={{"background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/galeria/cueva_elevador.png') center/cover no-repeat", "background-attachment": "fixed", "@media screen and (min-width: 0)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 30em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 48em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 62em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "@media screen and (min-width: 80em)": {"backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat"}, "width": "100%", "height": "100%"}}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "height": "85vh"}} direction={`column`} justify={`center`}>
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "2em", "color": "white", "fontFamily": "Montserrat", "fontWeight": "300"}}>
  {`BIENVENIDO A `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"letterSpacing": "0.1em", "fontSize": "2em", "color": "white", "fontFamily": "Montserrat", "fontWeight": "400"}}>
  {`ANALAND SUPER™`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"textAlign": "center", "marginTop": "1.5em", "letterSpacing": "0.1em", "fontSize": "1.5em", "color": "white", "fontFamily": "Montserrat", "fontStyle": "italic", "fontWeight": "200"}}>
  {`TU DIVERSIÓN, ES NUESTRA PASIÓN EN CADA DETALLE`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"marginTop": "10%", "width": "100%", "flexDirection": "row"}} justify={`center`} gap={`4`}>
  <Button_0a88c4dc3b1be9a57f5ff37ae07d7665/>
  <Link_dc08c4d912f2a218215936c559eb48f2/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesFlex align={`center`} css={{"borderTop": "1px solid #FFCC00", "width": "100%"}} direction={`column`} justify={`center`}>
  <Box sx={{"width": "40%", "textAlign": "center", "fontFamily": "Comfortaa", "fontWeight": "50", "marginTop": "3em", "color": "#CBCBCB"}}>
  <VStack>
  <Text sx={{"fontFamily": "Montserrat", "fontWeight": "300", "letterSpacing": "0.1em", "fontSize": "2em", "color": "#fff"}}>
  {`Nuestro Enfoque`}
</Text>
  <Text sx={{"fontFamily": "Montserrat", "fontWeight": "200", "fontStyle": "italic", "letterSpacing": "0.1em", "textAlign": "center", "fontSize": "1.2em", "color": "#fff", "marginTop": "2em"}}>
  {`LA CALIDAD ES NUESTRA PRIORIDAD`}
</Text>
</VStack>
  <Text sx={{"marginTop": "2em", "marginBottom": "1.5em"}}>
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
</Text>
  <Text as={`span`}>
  {`🌟`}
</Text>
  <Text sx={{"marginTop": "1.5em", "marginBottom": "1.5em"}}>
  {`En esta web podrás encontrar`}
  <RadixThemesStrong>
  {` nuestra tienda`}
</RadixThemesStrong>
  {`, las reglas, las`}
  <RadixThemesStrong>
  {` últimas novedades`}
</RadixThemesStrong>
  {` y algunas estadísticas sobre Analand y sus usuarios. :)`}
</Text>
  <Text as={`span`}>
  {`✨ ¡Esperamos que lo disfrutes! ✨`}
</Text>
</Box>
</RadixThemesFlex>
</RadixThemesScrollArea>
</VStack>
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
