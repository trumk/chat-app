import PropTypes from 'prop-types';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'fbb234c5-cc36-4c1e-a94f-d0b9a2edddf5',
        props.user.username,
        props.user.secret
    );
    
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
        </div>
    );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;
