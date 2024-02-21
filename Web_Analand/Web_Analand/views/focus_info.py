import reflex as rx
import reflex.components.radix.themes as rdxt

from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font
from Web_Analand.styles.colors import Color, TextColor

from Web_Analand.components.title_subtitle import title, subtitle


def focus_info() -> rx.components:
    return rx.chakra.box(
        rx.chakra.vstack(
            title("Nuestro Enfoque"),
            subtitle("LA CALIDAD ES NUESTRA PRIORIDAD"),
        ),
        rx.chakra.text("Bienvenido a ",
            rx.text.strong("Analand Super™"),
            " un proyecto que crece cada día más y más para ofrecerte la",
            rx.text.strong(" mejor experiencia"),
            " en el mundo de Minecraft que podamos darte. Nuestra prioridad es que te",
            rx.text.strong(" diviertas y disfrutes"),
            " de cada detalle sin abusar de nuestros usuarios económicamente.",
            margin_top=Size.LARGE.value,
            margin_bottom=Size.BIG.value
        ),
        rx.chakra.span("🌟"),
        rx.chakra.text("En esta web podrás encontrar",
            rx.text.strong(" nuestra tienda"),
            ", las reglas, las",
            rx.text.strong(" últimas novedades"),
            " y algunas estadísticas sobre Analand y sus usuarios. :)",
            margin_y=Size.BIG.value
        ),
        rx.chakra.span("✨ ¡Esperamos que lo disfrutes! ✨"),
        width="40%",
        text_align="center",
        font_family=Font.SECONDARY.value,
        font_weight="50",
        margin_top="3em",
        color=TextColor.SECONDARY.value
    )