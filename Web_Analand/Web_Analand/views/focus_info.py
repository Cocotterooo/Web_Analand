import reflex as rx

from Web_Analand.styles.styles import Size, MAX_WIDTH
from Web_Analand.styles.fonts import Font
from Web_Analand.styles.colors import Color, TextColor

from Web_Analand.components.title_subtitle import title, subtitle

# Motion
from Web_Analand.components.motion.motion import motion

def focus_info() -> rx.components:
    return rx.vstack(
        motion(
            rx.vstack(
                title('Nuestro Enfoque'),
                subtitle('LA CALIDAD ES NUESTRA PRIORIDAD'),
                align='center',
            ),
            initial={"opacity": 0},
            animate={"opacity": 1},
            transition={"duration": 0.5},
        ),
        motion(
            rx.text('Bienvenido a ',
                rx.text.strong('Analand Super™'),
                ', un proyecto que crece cada día más y más para ofrecerte la',
                rx.text.strong(' mejor experiencia'),
                ' en el mundo de Minecraft que podamos darte. Nuestra prioridad es que te',
                rx.text.strong(' diviertas y disfrutes'),
                ' de cada detalle sin abusar de nuestros usuarios económicamente.',
                margin_top=Size.LARGE.value,
                margin_bottom=Size.BIG.value
            ),
            while_in_view={"opacity": 1, "y": 0},
            animate={"opacity": 0, "y": 150},
            transition={"duration": 0.3},
            viewport={"once": True, "amount": 0.6}
        ),
        motion(
            rx.text('🌟'),
            while_in_view={"opacity": 1, "y": 0},
            animate={"opacity": 0, "y": 150},
            transition={"duration": 0.3},
            viewport={"once": True, "amount": 0.6}
        ),
        motion(
            rx.text('En esta web podrás encontrar',
                rx.text.strong(' nuestra tienda'),
                ', las reglas, las',
                rx.text.strong(' últimas novedades'),
                ', descargas varias y algunas estadísticas sobre Analand y sus usuarios. :)',
                margin_y= Size.BIG.value
            ),
            while_in_view={"opacity": 1, "y": 0},
            animate={"opacity": 0, "y": 150},
            transition={"duration": 0.3},
            viewport={"once": True, "amount": 0.6}
        ),
        motion(
            rx.text('✨ ¡Esperamos que lo disfrutes! ✨'),
            while_in_view={"opacity": 1, "y": 0},
            animate={"opacity": 0, "y": 150},
            transition={"duration": 0.3},
            viewport={"once": True, "amount": 0.6}
        ),
        width= '100%',
        max_width= MAX_WIDTH,
        align= 'center',
        text_align= 'center',
        font_family= Font.SECONDARY.value,
        font_weight= '50',
        padding_inline= '1em',
        color= TextColor.SECONDARY.value
    )