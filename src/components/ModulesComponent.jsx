const ModulesComponent = ({ modules }) => {

    function typeImage(module) {
        return module.type?'image': <img src={e.max_1200} />;
    }

    return (
        <div>
            {modules.map((e) => (
                typeImage(e)
            ))}
        </div>
    );
};

export default ModulesComponent;