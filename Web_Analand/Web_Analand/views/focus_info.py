import reflex as rx
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font
from Web_Analand.styles.colors import Color, TextColor

from Web_Analand.components.title_subtitle import title, subtitle


def focus_info() -> rx.component:
    return rx.box(
        rx.vstack(
            title("Nuestro Enfoque"),
            subtitle("CALIDAD > GANANCIAS"),
        ),
        rx.box(
            rx.span("Bienvenido a"),
            rx.span(" Analand Super™", style={"font-weight": "bold"}),
            rx.span(", un proyecto que crece cada día más para ofrecerte la"),
            rx.span(" mejor experiencia", style={"font-weight": "bold"}),
            rx.span(" en el mundo de Minecraft que podamos darte."),
            rx.span(" Nuestra prioridad es que te"),
            rx.span(" diviertas y disfrutes", style={"font-weight": "bold"}),
            rx.span(" de cada detalle sin abusar de nuestros usuarios económicamente."),
            margin_top=Size.LARGE.value,
            margin_bottom=Size.BIG.value
        ),
        rx.span("🌟"),
        rx.box(
            rx.span("En esta web podrás encontrar"),
            rx.span(" nuestra tienda", font_weight="bold"),
            rx.span(", las reglas, las"),
            rx.span(" últimas novedades", font_weight="bold"),
            rx.span(" y algunas estadísticas sobre Analand y sus usuarios. :)"),
            margin_y=Size.BIG.value
        ),
        rx.span("✨ ¡Esperamos que lo disfrutes! ✨"),
        width="40%",
        text_align="center",
        font_family=Font.SECONDARY.value,
        font_weight="50",
        margin_top="3em",
        color=TextColor.SECONDARY.value
    )