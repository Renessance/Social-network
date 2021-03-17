// import React from "react";
// import {create} from "react-test-renderer";
// // import ProfileStatusWithHooks from "./ProfileStatus";
//
//
// describe('ProfileStatus component ',  () => {
//     test("status from props should be in the state", ()=> {
//         const component = create(<ProfileStatusWithHooks status="test-status" />);
//         const instance = component.getInstance();
//         expect(instance.state.status).toBe("test-status");
//     });
//
//     test("span should be", ()=> {
//         const component = create(<ProfileStatusWithHooks />);
//         const root = component.root;
//         const span = root.findByType("span");
//         expect(span._fiber.elementType).toBe("span");
//     });
//
//     test("input shouldn't be", ()=> {
//         const component = create(<ProfileStatusWithHooks />);
//         const root = component.root;
//
//         expect(() => {
//             root.findByType("input");
//         }).toThrow();  // ожидаем ошибку
//     });
//
//     test("input should be test-status", ()=> {
//         const component = create(<ProfileStatusWithHooks status="test-status"/>); // отрисовываем компаненту
//         const root = component.root;
//         const span = root.findByType("span");
//         span.props.onDoubleClick();
//         const input = root.findByType("input");
//
//         expect(input.props.value).toBe("test-status");
//     });
//
//     test("callback should be called", ()=> {
//         const mockCallback = jest.fn(); // создаем эмуляцию вызова функции
//         const component = create(<ProfileStatusWithHooks status="test-status" setStatus={mockCallback} />); // в реальный setStatus который в компоненте закидываем mockCallback
//         const instance = component.getInstance(); // берем экземпляр компоненты
//         instance.inActivateEditMode(); // вызываем реальный метод
//         expect(mockCallback.mock.calls.length).toBe(1); // проверяем
//     });
// });