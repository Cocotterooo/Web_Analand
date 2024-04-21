import reflex as rx
from Web_Analand.styles.styles import navBar_link

def link_buttom_navbar(text:str='', link:str='/', icon:str = '', alt:str='') -> rx.components:
    return rx.link(
        rx.hstack(
            rx.image(
                src= icon,
                alt= alt,
            ),
            rx.text(
                text
            ),
        ),
        href= link,
        style= navBar_link,
    )