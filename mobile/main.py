from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import StringProperty, ListProperty

from kivymd.app import MDApp
from kivymd.theming import ThemableBehavior
from kivymd.uix.list import OneLineIconListItem, MDList
from kivy.core.window import Window

import asyncio
import json
import pprint
import aiohttp

Window.size = (360, 640)

class ContentNavigationDrawer(BoxLayout):
    pass

class ItemDrawer(OneLineIconListItem):
    icon = StringProperty()
    text_color = ListProperty((0, 0, 0, 1))


class DrawerList(ThemableBehavior, MDList):
    def set_color_item(self, instance_item):
        """Called when tap on a menu item."""

        # Set the color of the icon and text for the menu item.
        for item in self.children:
            if item.text_color == self.theme_cls.primary_color:
                item.text_color = self.theme_cls.text_color
                break
        instance_item.text_color = self.theme_cls.primary_color


class TestNavigationDrawer(MDApp):
    def build(self):
        return Builder.load_file('myfile.kv')

    def on_start(self):
        print("api")

        async def getData():
            async with aiohttp.ClientSession() as session:
                async with session.get('http://weather-api.lndo.site/api/weather-data/294') as resp:
                    
                    print(resp.status)
                    #print(type(await resp.text()))

                    
                    
                    # data type: <class 'dict'>
                    parsed = json.loads(await resp.text())
                    #print(type(parsed))
                    print(parsed['city']['forecast']['forecastDay'])
                    
                    # print pretty json 
                    #print(json.dumps(parsed, indent=4, sort_keys=True))


        loop = asyncio.get_event_loop()
        loop.run_until_complete(getData())

        icons_item = {
            "folder": "My files",
            "account-multiple": "Shared with me",
            "star": "Starred",
            "history": "Recent",
            "checkbox-marked": "Shared with me",
            "upload": "Upload",
        }
        for icon_name in icons_item.keys():
            self.root.ids.content_drawer.ids.md_list.add_widget(
                ItemDrawer(icon=icon_name, text=icons_item[icon_name])
            )

TestNavigationDrawer().run()