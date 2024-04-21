import reflex as rx
#utils:
from Web_Analand import utils

#styles:
from Web_Analand.styles import styles
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font, FontWeight
#views:
from Web_Analand.views.navbar import top_navbar
from Web_Analand.views.header_index import header_index
from Web_Analand.views.focus_info import focus_info
from Web_Analand.views.footer import footer
#constants:
from Web_Analand.constants import DISCORD_GUILD_ID
#STATE:
from Web_Analand.state.PageState import PageState

@rx.page(
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    #meta=utils.index_meta,
    #on_load=PageState
)
def index():
    return rx.vstack(
        top_navbar(),
        # Background image with dark overlay style
        rx.box(
            header_index(),
            #rx.text(IndexState.say_hello, font_size= Size.MEDIUM.value, color= TextColor.PRIMARY.value),
            border_bottom= f"1px solid {Color.ACCENT.value}",
            style={
                "background": "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('/galeria/galeria_webp/cueva_elevador.webp') center/cover no-repeat",
                "background_attachment": "fixed", # Da el efecto de "persiana" al hacer scroll
                "background_size":["cover", "cover", "cover", "cover", "cover"],
                "background_position":["center", "center", "center", "center", "center"],
                "background_repeat":["no-repeat", "no-repeat", "no-repeat", "no-repeat", "no-repeat"],
                "width": "100%",
                "height": "100%", 
                "margin_bottom": f"{Size.MEDIUM.value}"
            }
        ),
        rx.vstack(
            focus_info(),
            align="center",
            justify="center",
            width="100%",
        ),
        footer(),
        background_color= Color.PRIMARY.value,
        spacing= "0",
        on_mouse_move= PageState.get_server_status,
        on_scroll= PageState.get_server_status
    )
