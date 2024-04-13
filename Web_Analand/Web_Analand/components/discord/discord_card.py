import reflex as rx

# Styles:
from Web_Analand.styles.styles import Size 
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight
# Components:
from Web_Analand.components.information_state_line import information_state_line


DISCORD_COLOR = "#5865F2"

def discord_card(title:str, invitation_url:str) -> rx.components:
    return rx.hover_card.root(
        rx.hover_card.trigger(
            rx.button(
                rx.link(
                    rx.vstack(
                        rx.hstack(
                            rx.image(
                                src= "/icons/social/discord-logo-white.svg",
                                alt= "Logo de Discord",
                                height= "1.5em",
                            ),
                            width= "100%",
                            padding_bottom= Size.SMALL.value,
                            align= "center"
                        ),
                        rx.box(
                            rx.vstack(
                                information_state_line(
                                    title= "Miembros:", 
                                    icon= "/icons/context/sec_color/users-round.svg", 
                                    alt= "Icono de Usuarios", 
                                    info= "N/A",
                                    color_info= Color.DISCORD.value
                                ),
                                information_state_line(
                                    title= "Staff Online:", 
                                    icon= "/icons/context/sec_color/shield.svg", 
                                    alt= "Icono de jugadores", 
                                    info= "N/A",
                                    color_info= Color.DISCORD.value
                                ),
                                width= "100%",
                                align= "start",
                                spacing= "2",
                                margin_bottom= "1em",
                                padding_left= Size.DEFAULT.value,
                            ),
                            rx.text(
                                "¡Únete a nuestro Discord!",
                                color= TextColor.PRIMARY.value,
                                font_size= Size.DEFAULT.value,
                                font_weight= FontWeight.LIGHT.value,
                                align= "center",
                                class_name= "blink1_5",
                            ),
                            width= "100%",
                            align= "center"
                        ),
                    ),
                    href= invitation_url,
                    is_external= True,
                    padding= Size.DEFAULT.value,
                    padding_right= Size.MEDIUM.value,
                    height= "100%"
                ),
                _hover= {
                    "background_color": "rgba(0, 0, 0, 0.65)"
                },
                transition= "1s",
                background_color= "rgba(0, 0, 0, 0.3)",
                border_radius=Size.SMALL.value,
                border= f"2px solid {Color.DISCORD.value}",
                padding_x= Size.ZERO.value,
                height= "100%"
            )
        ),
        rx.hover_card.content(
            rx.text(
                "¡Al hacer click serás redirigido a nuestro Discord!"
            )
        )
    )