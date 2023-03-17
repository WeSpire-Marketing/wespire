///////////////////////////////////////////////////////////////////////////////
// Determine the accessible color of text
///////////////////////////////////////////////////////////////////////////////
export const getAccessibleColor = (hex) => {
  let color = hex.replace(/#/g, '')
  // if shorthand notation is passed in
  if (color.length !== 6) {
    color = `${color}${color}`
  }
  // rgb values
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#000000' : '#FFFFFF'
}

///////////////////////////////////////////////////////////////////////////////
// Change hex color into RGB
///////////////////////////////////////////////////////////////////////////////
export const getRGBAndOpacity = (name, obj) => {
  if (!obj) {
    return `--color-${name}: 0, 0, 0;--opacity-${name}: 0;`
  }

  let color = obj.hex.replace(/#/g, '')
  // if shorthand notation is passed in
  if (color.length !== 6) {
    color = `${color}${color}`
  }
  // rgb values
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)

  return `--color-${name}: ${r}, ${g}, ${b};--opacity-${name}: ${obj.alpha};`
}

export const variablesCss = (data) => {
  const {
    ctaButtonHeader,
    ctaSubmitButtonForm,
    ctaSubmitButtonFormRequestDemo,
    ctaSubmitButtonFormDark,
    ctaSubmitButtonFormLanding,
    ctaSectionButton,
  } = data

  const ctaButtonHeaderColorTextCss = getRGBAndOpacity(
    'ctaButtonHeader-colorText',
    ctaButtonHeader?.colorText
  )
  const ctaButtonHeaderColorTextHoverCss = getRGBAndOpacity(
    'ctaButtonHeader-colorTextHover',
    ctaButtonHeader?.colorTextHover
  )

  const ctaButtonHeaderColorBGCss = getRGBAndOpacity(
    'ctaButtonHeader-colorBG',
    ctaButtonHeader?.colorBackground
  )
  const ctaButtonHeaderColorBGHoverCss = getRGBAndOpacity(
    'ctaButtonHeader-colorBGHover',
    ctaButtonHeader?.colorBackgroundHover
  )

  const ctaButtonHeaderColorBorderCss = getRGBAndOpacity(
    'ctaButtonHeader-colorBorder',
    ctaButtonHeader?.colorBorder
  )
  const ctaButtonHeaderColorBorderHoverCss = getRGBAndOpacity(
    'ctaButtonHeader-colorBorderHover',
    ctaButtonHeader?.colorBorderHover
  )

  const ctaSubmitButtonFormColorTextCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorText',
    ctaSubmitButtonForm?.colorText
  )
  const ctaSubmitButtonFormColorTextHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorTextHover',
    ctaSubmitButtonForm?.colorTextHover
  )

  const ctaSubmitButtonFormColorBGCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorBG',
    ctaSubmitButtonForm?.colorBackground
  )
  const ctaSubmitButtonFormColorBGHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorBGHover',
    ctaSubmitButtonForm?.colorBackgroundHover
  )

  const ctaSubmitButtonFormColorBorderCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorBorder',
    ctaSubmitButtonForm?.colorBorder
  )
  const ctaSubmitButtonFormColorBorderHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonForm-colorBorderHover',
    ctaSubmitButtonForm?.colorBorderHover
  )

  const ctaSubmitButtonFormRequestDemoColorTextCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorText',
    ctaSubmitButtonFormRequestDemo?.colorText
  )
  const ctaSubmitButtonFormRequestDemoColorTextHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorTextHover',
    ctaSubmitButtonFormRequestDemo?.colorTextHover
  )

  const ctaSubmitButtonFormRequestDemoColorBGCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorBG',
    ctaSubmitButtonFormRequestDemo?.colorBackground
  )
  const ctaSubmitButtonFormRequestDemoColorBGHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorBGHover',
    ctaSubmitButtonFormRequestDemo?.colorBackgroundHover
  )

  const ctaSubmitButtonFormRequestDemoColorBorderCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorBorder',
    ctaSubmitButtonFormRequestDemo?.colorBorder
  )
  const ctaSubmitButtonFormRequestDemoColorBorderHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormRequestDemo-colorBorderHover',
    ctaSubmitButtonFormRequestDemo?.colorBorderHover
  )

  const ctaSubmitButtonFormDarkColorTextCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorText',
    ctaSubmitButtonFormDark?.colorText
  )
  const ctaSubmitButtonFormDarkColorTextHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorTextHover',
    ctaSubmitButtonFormDark?.colorTextHover
  )

  const ctaSubmitButtonFormDarkColorBGCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorBG',
    ctaSubmitButtonFormDark?.colorBackground
  )
  const ctaSubmitButtonFormDarkColorBGHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorBGHover',
    ctaSubmitButtonFormDark?.colorBackgroundHover
  )

  const ctaSubmitButtonFormDarkColorBorderCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorBorder',
    ctaSubmitButtonFormDark?.colorBorder
  )
  const ctaSubmitButtonFormDarkColorBorderHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormDark-colorBorderHover',
    ctaSubmitButtonFormDark?.colorBorderHover
  )

  const ctaSubmitButtonFormLandingColorTextCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorText',
    ctaSubmitButtonFormLanding?.colorText
  )
  const ctaSubmitButtonFormLandingColorTextHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorTextHover',
    ctaSubmitButtonFormLanding?.colorTextHover
  )

  const ctaSubmitButtonFormLandingColorBGCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorBG',
    ctaSubmitButtonFormLanding?.colorBackground
  )
  const ctaSubmitButtonFormLandingColorBGHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorBGHover',
    ctaSubmitButtonFormLanding?.colorBackgroundHover
  )

  const ctaSubmitButtonFormLandingColorBorderCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorBorder',
    ctaSubmitButtonFormLanding?.colorBorder
  )
  const ctaSubmitButtonFormLandingColorBorderHoverCss = getRGBAndOpacity(
    'ctaSubmitButtonFormLanding-colorBorderHover',
    ctaSubmitButtonFormLanding?.colorBorderHover
  )

  const ctaSectionButtonColorTextCss = getRGBAndOpacity(
    'ctaSectionButton-colorText',
    ctaSectionButton?.colorText
  )
  const ctaSectionButtonColorTextHoverCss = getRGBAndOpacity(
    'ctaSectionButton-colorTextHover',
    ctaSectionButton?.colorTextHover
  )

  const ctaSectionButtonColorBGCss = getRGBAndOpacity(
    'ctaSectionButton-colorBG',
    ctaSectionButton?.colorBackground
  )
  const ctaSectionButtonColorBGHoverCss = getRGBAndOpacity(
    'ctaSectionButton-colorBGHover',
    ctaSectionButton?.colorBackgroundHover
  )

  const ctaSectionButtonColorBorderCss = getRGBAndOpacity(
    'ctaSectionButton-colorBorder',
    ctaSectionButton?.colorBorder
  )
  const ctaSectionButtonColorBorderHoverCss = getRGBAndOpacity(
    'ctaSectionButton-colorBorderHover',
    ctaSectionButton?.colorBorderHover
  )

  return `${ctaButtonHeaderColorTextCss} ${ctaButtonHeaderColorTextHoverCss} ${ctaButtonHeaderColorBGCss} ${ctaButtonHeaderColorBGHoverCss} ${ctaButtonHeaderColorBorderCss} ${ctaButtonHeaderColorBorderHoverCss} ${ctaSubmitButtonFormColorTextCss} ${ctaSubmitButtonFormColorTextHoverCss} ${ctaSubmitButtonFormColorBGCss} ${ctaSubmitButtonFormColorBGHoverCss} ${ctaSubmitButtonFormColorBorderCss} ${ctaSubmitButtonFormColorBorderHoverCss} ${ctaSubmitButtonFormRequestDemoColorTextCss} ${ctaSubmitButtonFormRequestDemoColorTextHoverCss} ${ctaSubmitButtonFormRequestDemoColorBGCss} ${ctaSubmitButtonFormRequestDemoColorBGHoverCss} ${ctaSubmitButtonFormRequestDemoColorBorderCss} ${ctaSubmitButtonFormRequestDemoColorBorderHoverCss} ${ctaSubmitButtonFormDarkColorTextCss} ${ctaSubmitButtonFormDarkColorTextHoverCss} ${ctaSubmitButtonFormDarkColorBGCss} ${ctaSubmitButtonFormDarkColorBGHoverCss} ${ctaSubmitButtonFormDarkColorBorderCss} ${ctaSubmitButtonFormDarkColorBorderHoverCss} ${ctaSubmitButtonFormLandingColorTextCss} ${ctaSubmitButtonFormLandingColorTextHoverCss} ${ctaSubmitButtonFormLandingColorBGCss} ${ctaSubmitButtonFormLandingColorBGHoverCss} ${ctaSubmitButtonFormLandingColorBorderCss} ${ctaSubmitButtonFormLandingColorBorderHoverCss} ${ctaSectionButtonColorTextCss} ${ctaSectionButtonColorTextHoverCss} ${ctaSectionButtonColorBGCss} ${ctaSectionButtonColorBGHoverCss} ${ctaSectionButtonColorBorderCss} ${ctaSectionButtonColorBorderHoverCss}`
}
