/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Dialog as RadixThemesDialog, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import Error from "next/error"
import { useClientSideRouting } from "/utils/client_side_routing"
import NextHead from "next/head"



<<<<<<< HEAD
export function Fragment_34f041f6aae0b1134e0b2a186d19d162 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

=======
export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780


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

<<<<<<< HEAD
const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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

=======
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
export default function Component() {
  const routeNotFound = useClientSideRouting()

  return (
    <Fragment>
<<<<<<< HEAD
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_3ea1a0318ded176a3888f943242093c6/>
</div>
  <Fragment_34f041f6aae0b1134e0b2a186d19d162/>
</Fragment>
=======
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
>>>>>>> 577110be3a097b7c877ead6efd224bbba9e35780
  <Fragment>
  {isTrue(routeNotFound) ? (
  <Fragment>
  <Error statusCode={404}/>
</Fragment>
) : (
  <Fragment>
  
</Fragment>
)}
</Fragment>
  <NextHead>
  <title>
  {`404 - Not Found`}
</title>
  <meta content={`The page was not found`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
