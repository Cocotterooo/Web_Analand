import reflex as rx
from Web_Analand.styles.styles import navBar_link
from Web_Analand.styles.styles import Size

def link_buttom_navbar(text:str="", link:str="/") -> rx.component:
    return rx.box(
        rx.link(
            text,
            href= link,
            style= navBar_link,
        ),
    )