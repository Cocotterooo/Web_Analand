/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Input, Link, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowRightIcon, CalendarIcon, EmailIcon, StarIcon } from "@chakra-ui/icons"
import { set_val } from "/utils/state"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"backgroundImage": "linear-gradient(0deg, rgba(243, 234, 255) 0%, rgba(159, 122, 214) 68%, rgba(106, 57, 176) 100%)", "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "backgroundAttachment": "fixed", "backgroundPosition": "bottom", "width": "100vw", "height": "100vh"}}>
  <Flex direction={`row`} sx={{"height": "100%"}}>
  <VStack spacing={`0px !important`} sx={{"position": "left", "bg": "#F3EAFF", "margin": "0.6em", "shadow": "lg", "borderRadius": "0.6em"}}>
  <Box sx={{"padding": "0.8em", "bg": "#49198D", "borderTopLeftRadius": "0.6em", "borderTopRightRadius": "0.6em", "borderBottom": "4px solid #000"}}>
  <Center>
  <HStack justifyContent={`center`} sx={{"padding": "0.8em", "width": "30%", "bg": "#49198D"}}>
  <ChakraImage src={`/analand_logo4.svg`} sx={{"width": "5em"}}/>
  <Heading size={`lg`} sx={{"color": "#fff"}}>
  {`ANALAND SUPER`}
</Heading>
</HStack>
</Center>
</Box>
  <Link as={NextLink} href={`/`} sx={{"width": "100%", "_hover": {"backgroundColor": "#f3e4ac", "color": "#697E8F", "transition": "0.5s"}}}>
  <HStack justifyContent={`start`} spacing={`0.8em`} sx={{"color": "#697E8F", "fontSize": "1.5em", "padding": "0.8em", "width": "100%", "_hover": {"color": "#697E8F", "transition": "0.5s"}}}>
  <ArrowRightIcon/>
  <Text>
  {`Inicio`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/`} sx={{"width": "100%", "_hover": {"backgroundColor": "#f3e4ac", "color": "#697E8F", "transition": "0.5s"}}}>
  <HStack justifyContent={`start`} spacing={`0.8em`} sx={{"color": "#697E8F", "fontSize": "1.5em", "padding": "0.8em", "width": "100%", "_hover": {"color": "#697E8F", "transition": "0.5s"}}}>
  <StarIcon/>
  <Text>
  {`Tienda`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/`} sx={{"width": "100%", "_hover": {"backgroundColor": "#f3e4ac", "color": "#697E8F", "transition": "0.5s"}}}>
  <HStack justifyContent={`start`} spacing={`0.8em`} sx={{"color": "#697E8F", "fontSize": "1.5em", "padding": "0.8em", "width": "100%", "_hover": {"color": "#697E8F", "transition": "0.5s"}}}>
  <EmailIcon/>
  <Text>
  {`Reportes`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/`} sx={{"width": "100%", "_hover": {"backgroundColor": "#f3e4ac", "color": "#697E8F", "transition": "0.5s"}}}>
  <HStack justifyContent={`start`} spacing={`0.8em`} sx={{"color": "#697E8F", "fontSize": "1.5em", "padding": "0.8em", "width": "100%", "_hover": {"color": "#697E8F", "transition": "0.5s"}}}>
  <CalendarIcon/>
  <Text>
  {`Reglas`}
</Text>
</HStack>
</Link>
</VStack>
  <Stack direction={`column`} sx={{"width": "100%"}}>
  <Box sx={{"position": "sticky", "bg": "#F3EAFF", "zIndex": "999", "shadow": "0.6em", "padding": "0.6em", "marginTop": "0.6em", "marginRight": "0.6em", "borderRadius": "0.6em"}}>
  <Flex sx={{"width": "100%"}}>
  <Input placeholder={`Buscar`} sx={{"backgroundColor": "#f3e4ac", "borderRadius": "1.5em", "shadow": "lg", "width": "25%"}} type={`text`}/>
  <Spacer/>
  <Button sx={{"_hover": {"backgroundColor": "#000", "color": "#f3e4ac"}, "backgroundColor": "#f3e4ac", "color": "#000", "border": "1px solid #000", "borderRadius": "0.6em", "shadow": "lg", "transition": "0.5s"}}>
  {`Iniciar sesión`}
</Button>
</Flex>
</Box>
  <Box sx={{"height": "100%"}}>
  <VStack sx={{"bg": "#F3EAFF", "borderRadius": "0.6em", "width": "80%"}}>
  <Heading size={`lg`} sx={{"color": "#697E8F", "padding": "0.8em"}}>
  {`Noticias`}
</Heading>
</VStack>
</Box>
</Stack>
</Flex>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
