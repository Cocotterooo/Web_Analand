import reflex as rx

# Styles:
from Web_Analand.styles.styles import Size, card_info_index 
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight
# Components:
from Web_Analand.components.information_state_line import information_state_line


# region STATIC
def server_state(title:str, server_ip:str)->rx.components:
    return rx.hover_card.root(
        rx.hover_card.trigger(
            rx.button( 
                rx.vstack(
                    rx.hstack(
                        rx.image(
                            src= '/icons/context/prim_color/server.svg',
                            alt= 'Icono de servidor',
                        ),
                        rx.text(
                            title, 
                            font_size= Size.MEDIUM.value,
                            color= TextColor.PRIMARY.value
                        ),
                        width= '100%',
                        padding_bottom= Size.SMALL.value,
                        align= 'center'
                    ),
                    rx.box(
                        rx.vstack(
                            information_state_line(
                                title= 'Estado:', 
                                icon= '/icons/context/sec_color/power.svg', 
                                alt= 'Icono de estado', 
                                server_status_badge= True,
                            ),
                            information_state_line(
                                title= 'Jugadores:', 
                                icon= '/icons/context/sec_color/users-round.svg', 
                                alt= 'Icono de jugadores', 
                                info= 'N/A',
                                color_info= TextColor.ACCENT.value,
                                server_status_badge= False,
                            ),
                            information_state_line(
                                title= 'Actividad:', 
                                icon= '/icons/context/sec_color/square-activity.svg', 
                                alt= 'Icono de actividad', 
                                info= 'N/A',
                                color_info= TextColor.ACCENT.value,
                                server_status_badge= False,
                            ),
                            width= '100%',
                            align= 'start',
                            padding_left= Size.DEFAULT.value
                        ),
                        width= '100%',
                        align= 'center'
                    ),
                ),
                on_click=rx.set_clipboard(server_ip), # Copia la ip del servidor al portapapeles
                style= card_info_index
            )
        ),
        rx.hover_card.content(
            rx.text(
                f'¡Al hacer click se copiará la IP: ', 
                rx.text.strong(
                    server_ip,
                    color= TextColor.ACCENT.value
                ), 
                ' en tu ',
                rx.text.strong(
                    'portapapeles'
                ),
                '!'
            )
        )
    )