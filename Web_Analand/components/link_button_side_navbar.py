import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import Color, TextColor

def link_navbar_side(icon:str, text:str, root:str) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.icon(tag=icon),
            rx.text(text),
            color= TextColor.SECONDARY.value,
            font_size= Size.BIG.value,
            padding= Size.MEDIUM.value,
            spacing= Size.MEDIUM.value,
            justify_content= "start",
            width= "100%",
            _hover= {
            "color": TextColor.SECONDARY.value,
            "transition": "0.5s"
            }
        ),
        href= root, 
        width= "100%",
        _hover= {
            "background_color": Color.PRIMARY.value,
            "color": TextColor.SECONDARY.value,
            "transition": "0.5s"
        },
    )