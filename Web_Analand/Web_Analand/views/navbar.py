import reflex as rx

# Styles:
from Web_Analand.styles.styles import Size, navBar_link
from Web_Analand.styles.colors import Color
from Web_Analand.styles.fonts import FontWeight
from Web_Analand.styles.colors import TextColor
# Components:
from Web_Analand.components.logotipo import logotipo
from Web_Analand.components.link_buttom_navbar import link_buttom_navbar
from Web_Analand.components.item_dropdown_menu import item_dropdown_menu
from Web_Analand.components.discord.discord_buttom import discord_buttom
# Constants:
from Web_Analand.constants import DISCORD_URL

def top_navbar(background_color:str=Color.PRIMARY.value) -> rx.components:
    return rx.hstack(
        rx.box(
            logotipo(),
            margin_y= Size.TINY.value,
            margin_x= Size.SMALL.value,
        ),
        rx.spacer(),
        rx.tablet_and_desktop(
            rx.hstack(
                rx.spacer(),
                link_buttom_navbar('Inicio', '/', '/icons/context/sec_color/home.svg', 'Icono de inicio'),
                link_buttom_navbar('Tienda', '/', '/icons/context/sec_color/store.svg', 'Icono de tienda'),
                link_buttom_navbar('Blog', '/', '/icons/context/sec_color/book-marked.svg', 'Icono de blog'),
                link_buttom_navbar('Nosotros', '/', '/icons/context/sec_color/users-round.svg', 'Icono de nosotros'),
                link_buttom_navbar('Normas', '/', '/icons/context/sec_color/scale.svg', 'Icono de reglas'),
                align= 'center',
                spacing= '5'
            )
        ),
        rx.mobile_only(
            discord_buttom(DISCORD_URL),
            margin_x= Size.MEDIUM.value,
        ),
        rx.mobile_only(
            rx.menu.root(
                rx.menu.trigger(
                    rx.image(
                        src='/icons/context/prim_color/menu.svg',
                        height='auto',
                        width=Size.BIG.value,
                        alt='Icono del menú de navegación'
                    )
                ),
                rx.menu.content(
                    rx.menu.item(
                        item_dropdown_menu('Inicio', '/', '/icons/context/sec_color/home.svg', 'Icono de inicio'),
                    ),
                    rx.menu.item(
                        item_dropdown_menu('Tienda', '/', '/icons/context/sec_color/store.svg', 'Icono de tienda')
                    ),
                    rx.menu.item(
                        item_dropdown_menu('Blog', '/', '/icons/context/sec_color/book-marked.svg', 'Icono de blog')
                    ),
                    rx.menu.item(
                        item_dropdown_menu('Nosotros', '/', '/icons/context/sec_color/users-round.svg', 'Icono de usuarios')
                    ),
                    rx.menu.item(
                        item_dropdown_menu('Normas', '/', '/icons/context/sec_color/scale.svg', 'Icono de Normas')
                    ),
                    rx.menu.separator(),
                    rx.menu.item('Iniciar Sesión', color= TextColor.PRIMARY.value),
                )
            )
        ),
        border_top= f'1px solid {Color.ACCENT.value}',
        bg= background_color,
        position= 'sticky',
        padding_right= Size.BIG.value,
        padding_y= Size.TINY.value,
        z_index= '999',
        top= '0',
        width='100%',
        align= 'center'
    )
