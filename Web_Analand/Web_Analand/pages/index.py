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
#constants:
from Web_Analand.constants import DISCORD_GUILD_ID
#api:
#from Web_Analand.api.discord import discord

class IndexState(rx.State):
    pass
    #discord_info: dict
#MTE3OTE4MzE5MjkxNDI3MjI3Ng.Ghrbqz.4spjgsHDDDCOKyFKRO6NtgzxjQMfmG5z4xgSWo


    #async def get_discord_info(self):
        #self.discord_info = None
        #discord_info = discord("TOKEN", DISCORD_GUILD_ID)

@rx.page(
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    #meta=utils.index_meta,
    #on_load=[IndexState.get_discord_info]
)
def index():
    return rx.vstack(
        # Background image with dark overlay style
        rx.box(
            top_navbar(),
            header_index(),
            border_bottom= f"1px solid {Color.ACCENT.value}",
            style={
                "background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/galeria/cueva_elevador.png') center/cover no-repeat",
                "background_attachment": "fixed", # Da el efecto de "persiana" al hacer scroll
                "background_size":["cover", "cover", "cover", "cover", "cover"],
                "background_position":["center", "center", "center", "center", "center"],
                "background_repeat":["no-repeat", "no-repeat", "no-repeat", "no-repeat", "no-repeat"],
                "width": "100%",
                "height": "100%",
                "margin_bottom": f"{Size.MEDIUM.value}"
            }
        ),
        rx.flex(
            focus_info(),
            direction="column",
            align="center",
            justify="center",
            width="100%",
        ),
        background_color= Color.PRIMARY.value
    )
