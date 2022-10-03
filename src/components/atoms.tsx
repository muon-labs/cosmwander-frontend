import {
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  Slider,
  SliderProps
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styled } from '@material-ui/styles'
import config from '../../config'

const useStyles = makeStyles(theme => ({
  selectIcon: {
    fill: '#b9bed4 !important'
  }
}))

const inputProps = {
  style: { padding: 0, color: '#222222' },
  classes: {
    input: 'input',
    notchedOutline: 'notched-outline',
    focused: 'input-focused'
  }
}

export const DarkSelect = (props: SelectProps) => {
  const classes = useStyles()
  return (
    <FormControl>
      {/* Hack to have a placeholder (ew) */}
      <InputLabel
        // dense
        // @ts-ignore material ui is so dumb
        size={'small'}
        style={{
          opacity: 0.6,
          color: '#FFF',
          fontFamily: 'Quicksand',
          top: props.value ? -2 : -5
        }}
      >
        {props.label}
      </InputLabel>
      <Select
        {...props}
        inputProps={{ ...inputProps, placeholder: props.placeholder }}
        classes={{
          select: inputProps.classes.input,
          icon: classes.selectIcon
          // nativeInput:inputProps.classes.input
        }}
      />
    </FormControl>
  )
}
