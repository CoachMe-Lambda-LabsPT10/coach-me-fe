import React from 'react';
import { translate } from '../../utils/language/translate';
import { ReactComponent as Warning } from '../loginClient/assets/warning.svg';
import { ReactComponent as Success } from '../loginClient/assets/success.svg';
import './FailureModal.scss';

const SubmitModal = props => {
    const { show, onSubmit, bpOver, bpUnder, bS, weight, failMetric } = props;
    if (show) {
        if ((bpOver || bpUnder || bS || weight) !== undefined) {
            return (
                <div className='modal-container'>
                    <div className='modal-box'>
                        <Success />
                        <p>{translate('Form-Success')}!</p>
                        {/* <h1>{translate('Form-Failure')}</h1> */}

                        <button onClick={() => onSubmit()}>
                            {translate('continueBtn')}
                        </button>
                    </div>
                </div>
            );
        }

        if ((bpOver || bpUnder || bS || weight) === undefined) {
            return (
                <div className='modal-container'>
                    <div className='modal-box'>
                        <Warning />
                        <p>{translate('Form-Failure')}</p>
                        {/* <h1>{translate('Form-Failure')}</h1> */}

                        <button onClick={() => failMetric()}>OK</button>
                    </div>
                </div>
            );
        }
    }

    return null;
};

export default SubmitModal;