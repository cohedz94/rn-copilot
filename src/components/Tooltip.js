// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';
import { translate } from '../../../../src/i18';
import { Themes } from '../../../../src/common';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
}: Props) => (
    <View>
      <View style={styles.tooltipContainer}>
        <Text testID="stepDescription" style={styles.tooltipText}>{currentStep.text}</Text>
      </View>
      <View style={[styles.bottomBar]}>
        {
          !isLastStep ?
            <TouchableOpacity onPress={handleStop}>
              {/* <Button>{labels.skip || 'Skip'}</Button> */}
              <Button style={{ color: Themes.GRAY_TEXT_COLOR }}>{translate('tut.ignore')}</Button>
            </TouchableOpacity>
            : null
        }
        {
          !isFirstStep ?
            <TouchableOpacity onPress={handlePrev}>
              {/* <Button>{labels.previous || 'Previous'}</Button> */}
              <Button style={{ color: Themes.MAIN_TEXT_COLOR }}>{translate('tut.previous')}</Button>
            </TouchableOpacity>
            : null
        }
        {
          !isLastStep ?
            <TouchableOpacity onPress={handleNext}>
              <Button style={{ color: Themes.ORANGE }}>{translate('tut.understood')}</Button>
              {/* <Button>{labels.next || 'Next'}</Button> */}
            </TouchableOpacity> :
            <TouchableOpacity onPress={handleStop}>
              <Button style={{ color: Themes.LIGHT_BLUE }}>{translate('tut.done')}</Button>
              {/* <Button>{labels.finish || 'Finish'}</Button> */}
            </TouchableOpacity>
        }
      </View>
    </View>
  );

export default Tooltip;