import reflex as rx

# State:
from Web_Analand.state.PageState import PageState

# Styles:
from Web_Analand.styles.styles import Size, card_info_index
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight
# Components:
from Web_Analand.components.information_state_line import information_state_line


def discord_card(invitation_url:str,
    color:str= Color.DISCORD.value, 
    ) -> rx.components:
    return rx.hover_card.root(
        rx.hover_card.trigger(
            rx.button(
                rx.link(
                    rx.vstack(
                        rx.hstack(
                            rx.image(
                                src= '/icons/social/discord-logo-white.svg',
                                alt= 'Logo de Discord',
                                height= '1.5em',
                            ),
                            width= '100%',
                            padding_bottom= Size.SMALL.value,
                            align= 'center'
                        ),
                        rx.box(
                            rx.vstack(
                                information_state_line(
                                    title= 'Miembros:', 
                                    icon= '/icons/context/sec_color/users-round.svg', 
                                    alt= 'Icono de Usuarios', 
                                    info= PageState.discord_total_members,
                                    color_info= color
                                ),
                                information_state_line(
                                    title= 'Online:', 
                                    icon= '/icons/context/sec_color/unplug.svg', 
                                    alt= 'Icono de un enchufe', 
                                    info= PageState.discord_online_members,
                                    color_info= color
                                ),
                                width= '100%',
                                align= 'start',
                                spacing= '2',
                                margin_bottom= '1em',
                                padding_left= Size.DEFAULT.value,
                            ),
                            rx.text(
                                '¡Únete a nuestro Discord!',
                                color= TextColor.PRIMARY.value,
                                font_size= Size.DEFAULT.value,
                                font_weight= FontWeight.LIGHT.value,
                                align= 'center',
                                class_name= 'blink1_5',
                            ),
                            width= '100%',
                            align= 'center'
                        ),
                    ),
                    href= invitation_url,
                    is_external= True,
                    padding= Size.DEFAULT.value,
                    padding_right= Size.MEDIUM.value,
                    height= '100%'
                ),
                style= card_info_index,
                border_color= color,
                padding= Size.ZERO.value # for the link component
            )
        ),
        rx.hover_card.content(
            rx.text(
                '¡Al hacer click serás redirigido ',
                rx.text.strong(
                    'redirigido'
                ),
                ' a nuestro ',
                rx.text.strong(
                    'Discord',
                    color= color
                ),
                '!' 
            ),
            border_right= f'2px solid {color} !important',
        ),
        #on_mount= PageState.get_discord_num_members
    )