import React, { useEffect, useState } from 'react';
import {
    deleteScheduledMessage,
    getScheduledMessage,
    updateScheduledMessage
} from '../../../../actions/coachActions';
import UpdateModal from './UpdateModal';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from './DeleteModal';
import './messageCard.scss';

const MessageCard = props => {
    const { item, removedMessage } = props;

    const dispatch = useDispatch();

    const [showUpdateModal, setUpdateModal] = useState(false);
    const [showDeleteModal, setDeleteModal] = useState(false);

    // useEffect(() => {
    //     // if(clientprofile) {
    //     // }

    //     dispatch(getScheduledMessage(props.clientId));
    //     // eslint-disable-next-line
    // }, [props.clientId]);

    const toggleUpdateModal = () => {
        setUpdateModal(!showUpdateModal);
    };
    const toggleDeleteModal = () => {
        setDeleteModal(!showDeleteModal);
    };

    return (
        <>
            <div className='message-card'>
                <div className='date-container'>
                    <p>{item.month}</p>
                    <p>{item.dom}</p>
                    <p>{item.year}</p>
                </div>
                <div>
                    <p>{item.msg}</p>
                </div>

                <div className='button-container'>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            console.log('clicked');
                            toggleUpdateModal();
                        }}
                    >
                        {' '}
                        Edit{' '}
                    </button>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            toggleDeleteModal();
                        }}
                    >
                        {' '}
                        Delete
                    </button>
                    <UpdateModal show={showUpdateModal} />
                    <DeleteModal
                        show={showDeleteModal}
                        id={item.scheduleId}
                        removedMessage={removedMessage}
                        setShow={toggleDeleteModal}
                    />
                </div>
            </div>
        </>
    );
};
export default MessageCard;
