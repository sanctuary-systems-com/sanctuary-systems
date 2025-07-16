---
id: 04236b76-f979-40dd-8d02-f838842a328e
blueprint: page
title: Guide
page_builder:
  -
    id: m6as37rj
    lead_title: 'Setup Guide'
    title: 'Getting started'
    description: |-
      We'll guide you through these <strong>4 easy steps</strong> to use your Sentinel Core as Home Assistant server with local AI voice assistant:<br>
      <a href="#hardware" class="btn-ghost">1) Choose your hardware</a><br>
      <a href="#assembly" class="btn-ghost">2) Hardware assembly</a><br>
      <a href="#onboarding" class="btn-ghost">3) Home Assistant onboarding</a><br>
      <a href="#voice-assistant" class="btn-ghost">4) Choose your AI Voice Assistant</a>
    type: hero
    enabled: true
  -
    id: m6as0xj2
    title: 'Building the foundation'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Transform your Sentinel Core into a powerful AI home server by pairing it with a few essential components of your choice.'
    type: long_content
    enabled: true
    lead_title: 'Choose your hardware'
    section_id: hardware
  -
    id: m6c355ee
    title: 'Selecting your AI engine'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The first decision in this build is to select the engine that powers your AI: the GPU. Whether you’re giving new life to an used card or upgrading to something fresh, there are a few simple things to keep in mind:'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'We recommend '
          -
            type: text
            marks:
              -
                type: bold
            text: 'AMD Radeon RX 6000'
          -
            type: text
            text: ' and '
          -
            type: text
            marks:
              -
                type: bold
            text: '7000 series'
          -
            type: text
            text: ' GPUs for their exceptional price-to-performance ratio and dependable open-source Linux drivers. An 8GB VRAM card is great for getting started, but '
          -
            type: text
            marks:
              -
                type: bold
            text: '16GB or more '
          -
            type: text
            text: 'lets you explore larger, more ambitious models.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You are of course encouraged to try other GPUs from the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://pipci.jeffgeerling.com/'
                  rel: null
                  target: _blank
                  title: null
            text: 'Raspberry Pi PCIe Database'
          -
            type: text
            text: ', or share your results for cards not listed, to help grow the community’s knowledge.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Finally, keep the GPU’s '
          -
            type: text
            marks:
              -
                type: bold
            text: 'idle/maximum power'
          -
            type: text
            text: ' and its '
          -
            type: text
            marks:
              -
                type: bold
            text: 'physical size'
          -
            type: text
            text: ' in mind, as these will influence your choice of PSU and case.'
    reversible: true
    type: panels
    enabled: true
    lead_title: GPU
    image: gpu.png
  -
    id: m6c36moy
    lead_title: Case
    title: 'Find the perfect fit'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'With your GPU selected, it’s time to house your build in a case that suits both style and substance. If you already have an ATX case, it can easily accommodate a Mini-ITX board. However, if you’re eyeing a new Mini-ITX case, keep these tips in mind:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'GPU fit:'
                  -
                    type: text
                    text: ' Check that your case can handle the size of your GPU, both in length and height. Many modern GPUs are over 25cm long and take up two or more slots, which may exceed the capacity of some Mini-ITX cases.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'PSU type:'
                  -
                    type: text
                    text: ' Determine whether the case requires an ATX or the more compact SFX power supply.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Cooling options:'
                  -
                    type: text
                    text: ' Look for the number of case fans included or supported. The Sentinel Core can power up to two case fans, so you can keep your setup cool and efficient.'
    reversible: true
    type: panels
    enabled: true
    image: case.png
  -
    id: m6c37had
    title: 'Delivering the power'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The last piece of the puzzle is your power supply unit (PSU), that suits your GPU and case:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Case compatibility:'
                  -
                    type: text
                    text: ' Check whether your case requires an ATX or SFX PSU.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Wattage:'
                  -
                    type: text
                    text: " Make sure the PSU's 12V output comfortably exceeds your GPU’s maximum power draw. (The Pi’s 5V usage is negligible in comparison.)"
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Connections:'
                  -
                    type: text
                    text: ' Confirm there are enough 6+2 PCIe power connectors for your GPU—some SFX models may fall short.'
      -
        type: horizontalRule
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Other features you might want to consider:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Detachable cables:'
                  -
                    type: text
                    text: ' A modular PSU allows for cleaner cable management.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Efficiency ratings:'
                  -
                    type: text
                    text: ' 80 Plus or higher certification often means better power efficiency.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Low idle power:'
                  -
                    type: text
                    text: ' An efficient PSU reduces idle power draw, saving energy when the system isn’t under load.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'Silent operation:'
                  -
                    type: text
                    text: ' Look for 0 RPM fan control to keep things whisper-quiet.'
    reversible: true
    type: panels
    enabled: true
    lead_title: 'Power supply'
    image: power-supply.png
  -
    id: m6c37w9r
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Once your Sentinel Core is up and running, you can customize and enhance it with a few optional extras to suit your needs:'
          -
            type: hardBreak
          -
            type: text
            marks:
              -
                type: bold
            text: 'Storage: '
          -
            type: text
            text: 'Planning to store large media libraries or AI models? Consider adding a USB 3 hard drive.'
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Connectivity: '
          -
            type: text
            text: 'Expand your setup’s capabilities with Raspberry Pi HATs or a ZigBee dongle for seamless smart home integration.'
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Silent fans: '
          -
            type: text
            text: 'Keep things cool and quiet by upgrading your case fans to ultra-silent models for a more peaceful environment.'
    reversible: true
    type: panels
    enabled: true
    lead_title: Optional
    image: optionals.png
    title: 'What else could you want'
  -
    id: m6awojj6
    title: 'Where the plan comes together'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'With all your components ready, it’s time to assemble your AI home server. While your case manual will provide specific instructions for your model, the general process typically includes these steps:'
    type: long_content
    enabled: true
    lead_title: 'Hardware assembly'
    section_id: assembly
  -
    id: m6c3y3ey
    lead_title: Assembly
    title: 'Putting it together'
    reversible: false
    type: panels
    enabled: true
    image: assambly.png
    content:
      -
        type: orderedList
        attrs:
          start: 1
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Remove the side panels from your case.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Secure the power supply unit in its place using the screws provided with the case.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: "Ensure the rear cutout of your case is able to align with the Sentinel Core's ports. If your case includes a cover or bracket for this area, install it now."
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Mount the Sentinel Core in the motherboard location using the included standoffs and screws.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect the 24-pin power cable from the PSU to the Sentinel Core.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Attach the case fans to the 4-pin fan connectors.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect the power button and status LEDs to their header pins.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Remove the necessary metal slot covers (expansion slots) from the back of the case to make room for your GPU.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Plug the 8- or 6-pin PCIe power cables into the GPU.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'If using a PCIe riser, insert it into both the Sentinel Core and the GPU.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Carefully install the GPU into the PCIe slot or riser, aligning it with the expansion slots.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Close the side panels to complete the assembly.'
    note: 'Congratulations—your AI home server is now ready for the next step!'
  -
    id: m6axdt5r
    title: 'First-time setup'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Your Sentinel Core comes preinstalled with Home Assistant, so once assembled and powered on, you’re ready to begin. Just follow these steps to onboard Home Assistant and you are ready to start automating your home.'
    type: long_content
    enabled: true
    lead_title: 'Home Assistant onboarding'
    section_id: onboarding
  -
    id: m6c58oxe
    lead_title: 'Getting started'
    title: 'Using the login wizard'
    image: monitor.png
    reversible: false
    type: panels
    enabled: true
    content:
      -
        type: orderedList
        attrs:
          start: 1
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect Sentinel Core to a wired Ethernet connection.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Press the power button to turn it on.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Open a browser on another device in your network and go to: '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'http://homeassistant.local:8123/'
                          rel: null
                          target: _blank
                          title: null
                    text: 'http://homeassistant.local:8123/'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Start a new installation by creating a user account, or restore from a backup.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Enter the location of your home on the map.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Choose if and what data you’d like to share with Nabu Casa.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Review any automatically discovered devices and continue to your dashboard!'
  -
    id: m6axhp2y
    title: 'Choosing your AI voice assistant'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Sentinel Core comes preloaded with GPU drivers and Home Assistant, but you are completely free to choose your Voice Assistant setup.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A complete Voice Assistant setup consists of several key parts:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'LLM runner: Llama.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech to text system: Whisper'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Text to speech system: Piper'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'LLM integration: Extended OpenAI conversation'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech integration: Wyoming'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Voice Assistant configuration'
    type: long_content
    enabled: true
    lead_title: 'AI voice Assistant Setup'
    section_id: voice-assistant
  -
    id: m6c5dile
    lead_title: Add-ons
    title: 'Adding the building blocks'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Start by going to settings -> Add-ons -> Add-on store. From there install:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Piper - text to speech'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Get HACS - the installer for the The Home Assistant Community Store'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Llama.cpp - LLM runner'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Whisper.cpp - speech recognition'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Sanctuary Updater - to update our GPU enabled operating system fork'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Our fork already comes configured with the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/hacs/addons'
                  rel: null
                  target: null
                  title: null
            text: 'HACS add-ons repository'
          -
            type: text
            text: ' and our very own '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/sanctuary-systems-com/llm-addons'
                  rel: null
                  target: _blank
                  title: null
            text: 'LLM add-on repository'
          -
            type: text
            text: .
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Start Llama.cpp, Whisper.cpp and Piper, and make sure "start on boot" is checked.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'If you want to check and install operating system updates, start Sanctuary Updater.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Start Get HACS and then switch to the logs tab and follow the instructions, which will prompt you to restart Home Assistant.'
    image: addon.png
    reversible: true
    type: panels
    enabled: true
  -
    id: m6c5dych
    lead_title: Integrations
    title: 'Making everything work together'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Now head over to Settings -> Devices & Services -> Add Integration, search for HACS, and install it.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Go to the new HACS icon in the side bar, search for '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/jekalmin/extended_openai_conversation'
                  rel: null
                  target: _blank
                  title: null
            text: 'Extended OpenAI Conversation'
          -
            type: text
            text: ", and install it. Don't worry, we'll change the settings so it connects to llama.cpp instead of OpenAI."
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Now head back to Settings -> Devices & Services. Either Wyoming has detected Piper and Whisper.cpp or you need to add them yourself:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'If they are detected, just hit the "Add" button.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Otherwise, select Wyoming Protocol and from there use "Add service" button to configure the integrations we''ll need. Just enter the host and port, and hit "submit":'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Piper, host: localhost, port: 10200'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Whisper.cpp, host: localhost, port: 10303'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Now configure Extended OpenAI Conversation: Settings > Devices & Services > Hit the "Add intergration" button. Add "Extended OpenAI Conversation" with these settings:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Name: llama.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'API key: dummy'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Base URL: http://localhost:8765 (so it uses llama.cpp locally on the Sentinel Core)'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Version: leave blank'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Organization: leave blank'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Skip authentication: no'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'In the configuration (Settings > Devices & Services > Extended OpenAI Conversation > ⚙️), change:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'prompt template: customize the personality as you like'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'chat model: a HuggingFace repository name like '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'https://huggingface.co/NousResearch/Hermes-3-Llama-3.1-8B-GGUF'
                          rel: null
                          target: null
                          title: null
                    text: NousResearch/Hermes-3-Llama-3.1-8B-GGUF
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Maximum tokens to return in response: 300 (increase if you get an error about response length)'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'tool use: enable'
    image: integrations.png
    reversible: true
    type: panels
    enabled: true
  -
    id: m6c5eoac
    lead_title: 'Voice Assistant'
    title: 'Giving it a voice'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'This is where it all comes together. In Settings -> Voice Assistants select the existing "Home Assistant" and configure the following items:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Conversation Agent: llama.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech-to-text: whisper.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Text-to-speech: piper'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Then head over to the "Expose" app and select the entities you want you AI to be able to see and control.'
      -
        type: paragraph
        content:
          -
            type: text
            text: "That's it! You can now chat with you AI from the assist menu in the top right of the dashboard. For using your microphone it is best to use the mobile app."
      -
        type: paragraph
        content:
          -
            type: text
            text: 'From here you can explore different models, different voices, and pair microphones like the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.home-assistant.io/voice-pe/'
                  rel: null
                  target: _blank
                  title: null
            text: 'Home Assistant Voice'
          -
            type: text
            text: ', '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://futureproofhomes.net/products/satellite1-pcb-dev-kit'
                  rel: null
                  target: _blank
                  title: null
            text: 'FutureProofHomes Satelite1'
          -
            type: text
            text: ', or '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/rhasspy/wyoming-satellite'
                  rel: null
                  target: _blank
                  title: null
            text: 'Wyoming Satelite'
          -
            type: text
            text: .
    image: voice-assistant.png
    reversible: true
    type: panels
    enabled: true
  -
    id: md5p72i4
    lead_title: Overview
    title: 'The system at a glance'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Home Assistant has quite a complex menu, so here is where you find all the different settings and components at a glance'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: Settings
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Devices and Services - glue between Home Assistant and add-ons and other things'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Extended OpenAI Conversation'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Options (⚙️)'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'The prompt / personality of your assistant'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'The large language model used from HuggingFace'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'Functions your model can call ('
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: link
                                                attrs:
                                                  href: 'https://github.com/jekalmin/extended_openai_conversation/tree/main/examples/function'
                                                  rel: null
                                                  target: null
                                                  title: null
                                            text: examples
                                          -
                                            type: text
                                            text: )
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Add service'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'API key: anything'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'Base URL: http://localhost:8765'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Wyoming - configure the connection to the voice related add-ons'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Voice Assistants - configuration of the whole pipeline'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Assistants -> Home Assistant'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Conversation agent: the integration to use (Extended OpenAI Conversation)'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Prefer Handling command locally: try the default rule based assistant before sending the prompt to the (also local) LLM.'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Speech to text: whisper.cpp'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Text to speech: piper'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'Language & voice: select the model to use for TTS'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Add-ons - independent software components'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Add-on store - install and update add-ons'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Llama.cpp - LLM runner'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Logs: watch LLM status and any possible errors'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Whisper.cpp - speech recognition'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Configuration: voice model, language'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Logs: watch voice recognition status and any possible errors'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Sanctuary Updater:'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Configuration: force update'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Logs: see version check status and update progress'
    reversible: true
    type: panels
    enabled: false
  -
    id: md5qrnze
    lead_title: Overview
    title: 'The system at a glance'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Home Assistant has quite a complex menu, so here is where you find all the different settings and components at a glance'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: Settings
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Devices and Services - glue between Home Assistant and add-ons and other things'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Extended OpenAI Conversation'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Options (⚙️)'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'The prompt / personality of your assistant'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'The large language model used from HuggingFace'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'Functions your model can call ('
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: link
                                                attrs:
                                                  href: 'https://github.com/jekalmin/extended_openai_conversation/tree/main/examples/function'
                                                  rel: null
                                                  target: null
                                                  title: null
                                            text: examples
                                          -
                                            type: text
                                            text: )
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Add service'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'API key: anything'
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            text: 'Base URL: http://localhost:8765'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Wyoming - configure the connection to the voice related add-ons'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Voice Assistants - configuration of the whole pipeline'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Assistants -> Home Assistant'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Conversation agent: the integration to use (Extended OpenAI Conversation)'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Prefer Handling command locally: try the default rule based assistant before sending the prompt to the (also local) LLM.'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Speech to text: whisper.cpp'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Text to speech: piper'
                              -
                                type: bulletList
                                content:
                                  -
                                    type: listItem
                                    content:
                                      -
                                        type: paragraph
                                        content:
                                          -
                                            type: text
                                            marks:
                                              -
                                                type: bold
                                            text: 'Language & voice: select the model to use for TTS'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Add-ons - independent software components'
              -
                type: bulletList
                content:
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Add-on store - install and update add-ons'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Llama.cpp - LLM runner'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Logs: watch LLM status and any possible errors'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Whisper.cpp - speech recognition'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Configuration: voice model, language'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Logs: watch voice recognition status and any possible errors'
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Sanctuary Updater:'
                      -
                        type: bulletList
                        content:
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    text: 'Configuration: force update'
                          -
                            type: listItem
                            content:
                              -
                                type: paragraph
                                content:
                                  -
                                    type: text
                                    marks:
                                      -
                                        type: bold
                                    text: 'Logs: see version check status and update progress'
    type: long_content
    enabled: true
seo_noindex: false
seo_nofollow: false
seo_canonical_type: entry
sitemap_change_frequency: weekly
sitemap_priority: 0.5
updated_by: 4ec89364-7b70-4c80-9d33-825e7c64a1f8
updated_at: 1752687649
---
