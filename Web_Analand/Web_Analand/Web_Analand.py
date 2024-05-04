import reflex as rx
import reflex.components.radix.themes as rdxt
#styles:
from Web_Analand.styles import styles
#pages:
from Web_Analand.pages.index import index
#api:
from Web_Analand.api.api import repo, discord_members, get_num_members, get_member, get_server_resources



# Create app instance and add index page.
app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE
)
app.add_page(index)

# Public API routes:
app.api.add_api_route('/repo', repo)
app.api.add_api_route('/discord_members', discord_members)
app.api.add_api_route('/discord_member', get_member)
app.api.add_api_route('/discord_num_members', get_num_members)
app.api.add_api_route('/server', get_server_resources)
