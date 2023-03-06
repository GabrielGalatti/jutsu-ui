<p align="center">
  <img src="https://lh3.googleusercontent.com/4-ZaVGHshux1-4-wOvUgN76eZnl5XW4UwaoTYqcUeTUqdcxnGGd8wE1w_sDDsbeS7uBvANfpXj4XJGjaqD4vV2JrDggD3AlGuK8eCBOkc6gBG8cDpb-UqK8nTxos-lSXuq9A8vfG=w300" />
</p>
<h2 align="center">Build React Native Apps with a little Chakra ⚡️</h2>

<p align="center">
  <img alt="Bundle Size" src="https://badgen.net/bundlephobia/minzip/jutsu-ui"/>
  <a href="https://github.com/GabrielGalatti/jutsu-ui/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/GabrielGalatti/jutsu-ui"/>
  </a>
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/jutsu-ui"/>
  <img alt="Github Stars" src="https://badgen.net/github/stars/GabrielGalatti/jutsu-ui" />
</p>

The library offers a set of layout components based on Chakra UI that make it easy to style your components by passing props.

## Table of contents

- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 📋 [Components](#components)
- 🚀 [Style Props](#style-props)
- 💖 [Support](#support-jutsu-ui)

## Installation
To use Jutsu UI components, all you need to do is install ``jutsu-ui`` package in your project:
```sh
$ yarn add jutsu-ui
    
# or
	
$ npm i jutsu-ui
```

## Usage
It's very simple to use the components  of Jutsu UI, only import and create amazing layouts:
```jsx
import { Flex, Text } from "jutsu-ui"

function Example(){
	return(
		<Flex justifyContent="center" alignItens="center">
			<Text color="red">Using Jutsu with the energy of ⚡️Chakra!</Text>
		</Flex>
	) 
}
```

## Components
 
 The components are divided in 4 types:
 
 1. [Typography](#typography)
 2. [Button](#button)
 3. [Layout](#layout)
 4. [Input](#input)

> Image component is in development ⚠️

### Typography
To create custom texts you must use the ``Text`` component:

```jsx
import { Text } from "jutsu-ui"

function Title(){
	return (
		<Text color="black" textAlign="center" fontWeight="bold">Use Justu to create amazing apps</Text>
	)
}
```
>See [React Native Text Props](https://reactnative.dev/docs/text#props)
### Button
Jutsu Button has the same behavior of [TouchableOpacity](https://reactnative.dev/docs/touchableopacity):

```jsx
import { Button } from "jutsu-ui"

function ExampleBtn(){
	return (
		<Button color="black" bgColor="red" px="10px" py="5px" onPress={() => console.log("Clicked!")} title="Click to like Jutsu!"/>
	)
}
```

### Layout

To create layouts you could use ``Flex`` or ``Box``, which has the same behavior of [View](https://reactnative.dev/docs/view):

```jsx
import { Flex, Text, Box } from "jutsu-ui"

function ExampleFlex(){
	return(
		<Flex justifyContent="center" alignItens="center">
			<Text color="red">Using Jutsu with the energy of ⚡️Chakra!</Text>
		</Flex>
	) 
}

function ExampleBox(){
	return(
		<Box bgColor="black" borderRadius={10}>
			<Text color="red">Using Jutsu with the energy of ⚡️Chakra!</Text>
		</Box>
	) 
}
```

### Input

In some cases it's hard to customize our forms on our style, but Jutsu UI makes more simple with the same behavior and props of [TextInput](https://reactnative.dev/docs/textinput):

```jsx
import { Alert } from "react-native"
import { Flex, Input, Button, Text } from "jutsu-ui"
import { useForm, useController } from "react-hook-form"

function ControlledInput({ control, name, label }){
	const { field } = useController({
		control,
		defaultValue: '',
		name,
	})
	
	return(
		<>
			<Text fontSize="">{label}</Text>
			<Input value={field.value} onChangeText={field.onChange} bgColor="blue" px="10px" py="5px"/>
		</>
	)
}

function ExampleForm(){
	const { control, handleSubmit } = useForm()
	const onSubmit = (data) => Alert.alert(JSON.stringify(data))
	
	return(
		<Flex justifyContent="center" alignItens="center" w="100%">
			<ControlledInput control={control} name="example"/>
			<Button onPress={handleSubmit(onSubmit)} title="Submit Form"/>
		</Flex>
	) 
}
```
> The example above uses the **react-form-hook** library, see the [official documentation](https://react-hook-form.com/).

## Style Props

> *Style props are a way to alter the style of a component by simply passing props to it. It helps to save time by providing helpful shorthand ways to style components.* 
<p align="end"><a href="https://chakra-ui.com/docs/styled-system/style-props"><b>Chakra UI Documentation</b></a></p> 

### Margin and Padding:

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
| mt, marginTop | marginTop | Size |
| mb, marginBotton | marginBotton | Size |
| ml, marginLeft | marginLeft | Size |
| mr, marginRight | marginRight | Size |
| mx, marginX | marginHorizontal| Size |
| my, marginY | marginVertical| Size |
| pt, paddingTop | paddingTop | Size |
| pb, paddingBotton | paddingBotton | Size | 
| pr, paddingRight | paddingRight | Size |
| pl, paddingLeft | paddingLeft | Size |
| px, paddingX | paddingHorizontal | Size |
|py, paddingY | paddingVertical | Size|

***Size type:*** `${number}px | ${number}em | ${number}% | number`  

### Color and Background Color:

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
|bgColor, backgroundColor | backgroundColor | Color |
|color| color | Color |
| opacity | opacity | number |

***Color type:*** See [Color Reference · React Native](https://reactnative.dev/docs/colors)

### Border:

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
| border | border | string |
| borderColor | borderColor | Color |
| borderBottomWidth | borderBottomWidth | number |
| borderEndWidth | borderEndWidth | number |
| borderLeftWidth | borderLeftWidth | number |
| borderRightWidth | borderRightWidth | number |
| borderStartWidth | borderStartWidth | number |
| borderTopWidth | borderTopWidth | number |
| borderWidth  | borderWidth | number |
| borderRadius | borderRadius | number |

###  Layout: 

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
| display | display | `"flex","none"` |
|h, height| height | Size |
|w, width | width | Size |
| maxW, maxWidth | maxWidth | Size |
| minW, minWidth | minWidth | Size |
| maxH, maxHeight | maxHeight | Size |
| minH, minHeight | minHeight | Size|
| position | position | `"relative","absolute"`|
| overflow | overflow | `"visible","hidden","scroll"`|
| zIndex | zIndex | number |
| top | top | Size |
| bottom | bottom | Size |
| left | left | Size |
| right | right | Size |

### Flexbox:

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
| flex | flex | number|
| flexDirection | flexDirection | `"row","row-reverse","column","column-reverse"` |
| flexWrap | flexWrap | `"nowrap","wrap","wrap-reverse"` |
| direction | direction | `"inherit","ltr","rtl"` |
| justifyContent | justifyContent | `"flex-start","flex-end","center","space-between","space-around", "space-evenly"`|
| alignItems | alignItems | `"flex-start","flex-end","center","stretch","baseline"`|
| flexShrink | flexShrink | number |
| flexGrow | flexGrow | number |
| flexBasis | flexBasis | Size |

###  Typography:

| Prop | React Native Prop | Type |
|:------|:-------------------|:------:|
| fontFamily | fontFamily | string |
| fontSize | fontSize | Size |
| fontStyle | fontStyle | `"normal", "italic"`|
| fontWeight | fontWeight | `'normal', 'bold', '100', '200', '300', '400','500','600','700','800','900'`|
| textAlign | textAlign | `'auto','left','right','center','justify'`

## Support Jutsu UI

Jutsu UI could help a lot of developers to create amazing mobile interfaces around the world, if you want to see more features and support our team:

<a href="https://www.buymeacoffee.com/gabrielgalatti"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a beer&emoji=🍺&slug=gabrielgalatti&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a>
