import reflex as rx

# Styles:
from Web_Analand.styles.colors import TextColor
from Web_Analand.styles.styles import Size

# Components:
from Web_Analand.components.status_badge_server import status_badge_server

def information_state_line(
        title:str, 
        icon:str, 
        alt:str, 
        info:str = 'N/A', 
        color_info:str= TextColor.PRIMARY.value, 
        server_status_badge:bool= False,
        ) -> rx.components:
    return rx.hstack(
        rx.image(
            src= icon,
            alt= alt,
        ),
        rx.text(
            title,
            color= TextColor.SECONDARY.value
        ),
        rx.cond(
            server_status_badge,
            status_badge_server(),
            rx.text(
                info,
                font_size= Size.MEDIUM.value,
                color= color_info
            )
        ),
        align= 'center'
    )