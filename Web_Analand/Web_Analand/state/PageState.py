import reflex as rx

# Api:
from Web_Analand.api.api import get_num_members

class PageState(rx.State):

    num_members: list
    total_members: int
    online_members: int

    async def discord_num_members(self):
        self.num_members = await get_num_members()
        self.total_members = self.num_members['total_members']
        self.online_members = self.num_members['online_members']