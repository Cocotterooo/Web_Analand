import reflex as rx
import reflex.components.radix.themes as rdxt
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

#class IndexState(rx.State):
#    pass
    #discord_info: dict

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
        rx.flex(
            rdxt.scroll_area(
                top_navbar(),
                rx.box(
                    header_index(),
                    style={
                        "background": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/galeria/cueva_elevador.png') center/cover no-repeat",
                        "background-attachment": "fixed",
                        "width": "100vw",
                        "height": "100vh",
                    }
                ),
                rx.flex(
                    focus_info(),
                    border_top= f"1px solid {Color.ACCENT.value}",
                    direction="column",     # Sets the direction of main axis to column
                    align="center",         # Centers along the cross axis (horizontal centering)
                    justify="top",          # Centers along the main axis (vertical centering)
                    width="100%",           # Use 100% width if you want to center in the viewport
                    height="100vh" 
                ),
                style={
                    "height": "100vh",
                    "background_color": Color.PRIMARY.value
                },
                type_="hover",  # Scrollbars are always visible
                scrollbars="vertical"
            )
        )
    )
