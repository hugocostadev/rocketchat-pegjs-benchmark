
# Heading 1

**Paragraph text**: **Bold** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, enim et facilisis commodo, est augue venenatis ligula, in convallis erat felis nec nisi. In eleifend ligula a nunc efficitur, ut finibus enim fringilla. 

## Heading 2

_Italict Text_: _Italict_ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, enim et facilisis commodo, est augue venenatis ligula, in convallis erat felis nec nisi. In eleifend ligula a nunc efficitur, ut finibus enim fringilla. 

### Heading 3 - Lists, Links and elements

**Unordered List**

- List Item 1
- List Item 2
- List Item 3
- List Item 4

**Ordered List**

1. List Item
2. List Item
3. List Item
4. List Item


> Quote test: **Bold** _Italic_ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales, enim et facilisis commodo, est augue venenatis ligula, in convallis erat felis nec nisi. In eleifend ligula a nunc efficitur, ut finibus enim fringilla.


**Links:**
rocket.chat

google.com

www.google.com

open.rocket.chat

[Google](google.com)

[Rocket.Chat](rocket.chat)

https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351

<https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351|Rocket.Chat Link Test>

[Rocket.Chat Link Test](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)

[**Rocket.Chat Link Test**](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)

[~~Rocket.Chat Link Test~~](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)

[__Rocket.Chat Link Test__](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)

[__**~~Rocket.Chat Link Test~~**__](https://desk.rocket.chat/support/rocketchat/ShowHomePage.do#Cases/dv/413244000073043351)


hugo.costa@rocket.chat

+55991991997

# Images

![Image one](https://assets-global.website-files.com/611a19b9853b7414a0f6b3f6/62330c94833bb061e29ff1dc_in-app-chat-messaging-p-800.png)


# Code blocks

`Inline code`


```typescript
const applyMarkdownIfRequires = (
	list: MessageAttachmentDefault['mrkdwn_in'] = ['text', 'pretext'],
	key: MarkdownFields,
	text: string,
	variant: 'inline' | 'inlineWithoutBreaks' | 'document' = 'inline',
): ReactNode => (list?.includes(key) ? <MarkdownText parseEmoji variant={variant} content={text} /> : text);
```

# Unicode Emojis

😀

😀💅💪🧠

🚀⏰🕰

# ASCII Emojis

:) :( :D :X

# Bult in Emojis

:smile: :rocket: :eyes: :success-kid: 

# KaTeX

Easy as \\(E = mc^2\\), right?

\\[
	\\f\\relax{x} = \\int_{-\\infty}^\\infty
	\\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
	\\,d\\xi
\\]
