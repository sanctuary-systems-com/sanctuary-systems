---
id: 5c526dbf-9dd7-4c52-98d8-54e00ebddfb6
blueprint: page
title: Guide
updated_by: cdeed34e-ed72-49e8-9645-bf272a80a401
updated_at: 1737454461
seo_noindex: false
seo_nofollow: false
seo_canonical_type: entry
sitemap_change_frequency: weekly
sitemap_priority: 0.5
page_builder:
  -
    id: m629hn9n
    lead_title: Support
    title: 'How to setup the Haven Core'
    type: hero
    enabled: true
  -
    id: m629bcji
    title: 'Flash an image to the Compute Module'
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '1) Prerequisites'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To flash the Compute Module eMMC, you need the following:'
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
                    text: 'Another computer, referred to in this guide as the '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'host device'
                  -
                    type: text
                    text: '. You can use Linux (we recommend Raspberry Pi OS or Ubuntu), Windows 11, or macOS.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'The Compute Module IO Board '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'https://www.raspberrypi.com/documentation/computers/compute-module.html#io-board-compatibility'
                          rel: null
                          target: null
                          title: null
                    text: 'that corresponds to your Compute Module model'
                  -
                    type: text
                    text: .
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'A micro USB cable, or a USB-C cable for Compute Module models since CM5IO.'
      -
        type: paragraph
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Tip: '
          -
            type: text
            text: 'In some cases, USB hubs can prevent the host device from recognising the Compute Module. If your host device does not recognise the Compute Module, try connecting the Compute Module directly to the host device. For more diagnostic tips, see '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/raspberrypi/usbboot?tab=readme-ov-file#troubleshooting'
                  rel: null
                  target: null
                  title: null
            text: 'the usbboot troubleshooting guide'
          -
            type: text
            text: .
    type: long_content
    enabled: true
  -
    id: m629f607
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '2) Set up the IO Board'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To begin, physically set up your IO Board. This includes connecting the Compute Module and host device to the IO Board.'
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
                    text: 'Compute Module 5 IO Board'
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
                    text: 'Compute Module 4 IO Board'
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
                    text: 'Compute Module IO Board'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To set up the Compute Module 5 IO Board:'
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
                    text: 'Connect the Compute Module to the IO board. When connected, the Compute Module should lie flat.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Fit nRPI_BOOT to J2 (disable eMMC Boot) on the IO board jumper.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect a cable from USB-C slave port J11 on the IO board to the host device.'
    type: long_content
    enabled: true
  -
    id: m629fn5b
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '3) Set up the host device'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Next, let’s set up software on the host device.'
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Tip '
          -
            type: text
            text: 'For a host device, we recommend a Raspberry Pi 4 or newer running 64-bit Raspberry Pi OS.'
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
                    text: Linux
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
                    text: macOS
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
                    text: Windows
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To set up software on a Linux host device:'
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
                    text: 'Run the following command to install rpiboot (or, alternatively, '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'https://github.com/raspberrypi/usbboot'
                          rel: null
                          target: null
                          title: null
                    text: 'build rpiboot from source'
                  -
                    type: text
                    text: '):'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '$ sudo apt install rpiboot'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect the IO Board to power.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Then, run rpiboot:'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '$ sudo rpiboot'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'After a few seconds, the Compute Module should appear as a mass storage device. Check the /dev/ directory, likely /dev/sda or /dev/sdb, for the device. Alternatively, run lsblk and search for a device with a storage capacity that matches the capacity of your Compute Module.'
    type: long_content
    enabled: true
  -
    id: m629fy4p
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '4) Flash the eMMC'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You can use '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager'
                  rel: null
                  target: null
                  title: null
            text: 'Raspberry Pi Imager'
          -
            type: text
            text: ' to flash an operating system image to a Compute Module.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Alternatively, use dd to write a raw OS image (such as '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.raspberrypi.com/documentation/computers/os.html#introduction'
                  rel: null
                  target: null
                  title: null
            text: 'Raspberry Pi OS'
          -
            type: text
            text: ') to your Compute Module. Run the following command, replacing /dev/sdX with the path to the mass storage device representation of your Compute Module and raw_os_image.img with the path to your raw OS image:'
      -
        type: paragraph
        content:
          -
            type: text
            text: '$ sudo dd '
          -
            type: text
            marks:
              -
                type: bold
            text: if
          -
            type: text
            text: '=raw_os_image.img of=/dev/sdX bs=4MiB'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Once the image has been written, disconnect and reconnect the Compute Module. You should now see two partitions (for Raspberry Pi OS):'
      -
        type: paragraph
        content:
          -
            type: text
            text: '/dev/sdX <- Device /dev/sdX1 <- First partition (FAT) /dev/sdX2 <- Second partition (Linux filesystem)'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You can mount the /dev/sdX1 and /dev/sdX2 partitions normally.'
    type: long_content
    enabled: true
  -
    id: m629g74b
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '4) Boot from eMMC'
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
                    text: 'Compute Module 5 IO Board'
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
                    text: 'Compute Module 4 IO Board'
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
                    text: 'Compute Module IO Board'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Disconnect nRPI_BOOT from J2 (disable eMMC Boot) on the IO board jumper.'
    type: long_content
    enabled: true
  -
    id: m629ggqm
    content:
      -
        type: heading
        attrs:
          level: 4
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '6) Boot'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Disconnect the USB slave port. Power-cycle the IO board to boot the Compute Module from the new image you just wrote to eMMC.'
    type: long_content
    enabled: true
  -
    id: m629gn9r
    content:
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Known issues'
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
                    text: 'A small percentage of CM3 devices may experience problems booting. We have traced these back to the method used to create the FAT32 partition; we believe the problem is due to a difference in timing between the CPU and eMMC. If you have trouble booting your CM3, create the partitions manually with the following commands:'
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '$ sudo parted /dev/<device> (parted) mkpart primary fat32 4MiB 64MiB (parted) q $ sudo mkfs.vfat '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: '-F32'
                  -
                    type: text
                    text: ' /dev/<device> $ sudo cp '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: '-r'
                  -
                    type: text
                    text: ' <files>/'
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: '*'
                  -
                    type: text
                    text: ' <mountpoint>'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'The CM1 bootloader returns a slightly incorrect USB packet to the host. Most USB hosts ignore it, but some USB ports don’t work due to this bug. CM3 fixed this bug.'
    type: long_content
    enabled: true
---
