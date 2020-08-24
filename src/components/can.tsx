import rules from "../auth/rbac-rules";

const check = (role: string, action: string, data: unknown) => {
    // if (!rules.hasOwnProperty(role)) {
    //     return false;
    // }

    const permissions = rules[role];
    console.log('Can', permissions, role, action, data);
    if (!permissions) {
        // role is not present in the rules
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && staticPermissions.includes(action)) {
        // static rule not provided for action
        return true;
    }

    const dynamicPermissions = permissions.dynamic;

    if (dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action];
        if (!permissionCondition) {
            // dynamic rule not provided for action
            return false;
        }

        return permissionCondition(data);
    }
    return false;
};

const Can = (props: { yes: () => JSX.Element; no: () => JSX.Element, role: string, perform: string, data?: unknown }) =>
    check(props.role, props.perform, props.data)
        ? props.yes()
        : props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;