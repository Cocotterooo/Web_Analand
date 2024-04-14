import reflex as rx

# Styles:
from Web_Analand.styles.colors import TextColor
from Web_Analand.styles.styles import Size

def information_state_line(
        title:str, 
        icon:str, 
        alt:str, 
        info:str = "N/A", 
        color_info:str= TextColor.PRIMARY.value, 
        badge:bool= False, 
        color_badge:str="red", 
        class_name:str=""
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
            badge,
            rx.badge(
                info, 
                variant="solid", 
                color_scheme= color_badge,
                radius="large",
                class_name= class_name
            ),
            rx.text(
                info,
                font_size= Size.MEDIUM.value,
                color= color_info
            )
        ),
        align= "center"
    )