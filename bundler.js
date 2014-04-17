var famous = {
    core: {
        Context: require('./core/Context'),
        ElementAllocator: require('./core/ElementAllocator'),
        Engine: require('./core/Engine'),
        Entity: require('./core/Entity'),
        EventEmitter: require('./core/EventEmitter'),
        EventHandler: require('./core/EventHandler'),
        Group: require('./core/Group'),
        Modifier: require('./core/Modifier'),
        OptionsManager: require('./core/OptionsManager'),
        RenderNode: require('./core/RenderNode'),
        Scene: require('./core/Scene'),
        SpecParser: require('./core/SpecParser'),
        Surface: srequire('./core/Surface'),
        Transform: require('./core/Transform'),
        View: require('./core/View'),
        ViewSequence: require('./core/ViewSequence')
    },
    events: {
        EventArbiter: require('./events/EventArbiter'),
        EventFilter: require('./events/EventFilter'),
        EventMapper: require('./events/EventMapper')
    },
    inputs: {
        FastClick: require('./inputs/FastClick'),
        GenericSync: require('./inputs/GenericSync'),
        MouseSync: require('./inputs/MouseSync'),
        PinchSync: require('./inputs/PinchSync'),
        RotateSync: require('./inputs/RotateSync'),
        ScaleSync: require('./inputs/ScaleSync'),
        ScrollSync: require('./inputs/ScrollSync'),
        TouchSync: require('./inputs/TouchSync'),
        TouchTracker: require('./inputs/TouchTracker'),
        TwoFingerSync: require('./inputs/TwoFingerSync')
    },
    math: {
        Matrix: require('./math/Matrix'),
        Quaternion: require('./math/Quaternion'),
        Random: require('./math/Random'),
        Utilities: require('./math/Utilities'),
        Vector: require('./math/Vector')
    },
    modifiers: {
        Draggable: require('./modifiers/Draggable'),
        Fader: require('./modifiers/Fader'),
        ModifierChain: require('./modifiers/ModifierChain'),
        StateModifier: require('./modifiers/StateModifier')
    },
    physics: {
        bodies: {
            Body: require('./physics/bodies/Body'),
            Circle: require('./physics/bodies/Circle'),
            Particle: require('./physics/bodies/Particle'),
            Rectangle: require('./physics/bodies/Rectangle')
        },
        constraints: {
            Collision: require('./physics/constraints/Collision'),
            Constraint: require('./physics/constraints/Constraint'),
            Curve: require('./physics/constraints/Curve'),
            Distance: require('./physics/constraints/Distance'),
            Snap: require('./physics/constraints/Snap'),
            Surface: require('./physics/constraints/Surface'),
            Wall: require('./physics/constraints/Wall'),
            Walls: require('./physics/constraints/Walls')
        },
        forces: {
            Drag: require('./physics/forces/Drag'),
            Force: require('./physics/forces/Force'),
            Repulsion: require('./physics/forces/Repulsion'),
            RotationalDrag: require('./physics/forces/RotationalDrag'),
            RotationalSpring: require('./physics/forces/RotationalSpring'),
            Spring: require('./physics/forces/Spring'),
            VectorField: require('./physics/forces/VectorField')
        },
        integrators: {
            SymplecticEuler: require('./physics/integrators/SymplecticEuler')
        },
        PhysicsEngine: require('./physics/PhysicsEngine')
    },
    surfaces: {
        CanvasSurface: require('./surfaces/CanvasSurface'),
        ContainerSurface: require('./surfaces/ContainerSurface'),
        ImageSurface: require('./surfaces/ImageSurface'),
        InputSurface: require('./surfaces/InputSurface'),
        VideoSurface: require('./surfaces/VideoSurface')
    },
    transitions: {
        CachedMap: require('./transitions/CachedMap'),
        Easing: require('./transitions/Easing'),
        MultipleTransition: require('./transitions/MultipleTransition'),
        SnapTransition: require('./transitions/SnapTransition'),
        SpringTransition: require('./transitions/SpringTransition'),
        Transitionable: require('./transitions/Transitionable'),
        TransitionableTransform: require('./transitions/TransitionableTransform'),
        TweenTransition: require('./transitions/TweenTransition'),
        WallTransition: require('./transitions/WallTransition')
    },
    utilities: {
        KeyCodes: require('./utilities/KeyCodes'),
        Timer: require('./utilities/Timer'),
        Utility: require('./utilities/Utility')
    },
    views: {
        Deck: require('./views/Deck'),
        EdgeSwapper: require('./views/EdgeSwapper'),
        Flipper: require('./views/Flipper'),
        GridLayout: require('./views/GridLayout'),
        HeaderFooterLayout: require('./views/HeaderFooterLayout'),
        Lightbox: require('./views/Lightbox'),
        RenderController: require('./views/RenderController'),
        ScrollContainer: require('./views/ScrollContainer'),
        Scroller: require('./views/Scroller'),
        Scrollview: require('./views/ScrollView'),
        SequentialLayout: require('./views/SequentialLayout')
    },
    widgets: {
        NavigationBar: require('./widgets/NavigationBar'),
        Slider: require('./widgets/Slider'),
        TabBar: require('./widgets/TabBar'),
        ToggleButton: require('./widgets/ToggleButton'),
    }
};
