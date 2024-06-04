#include "config.h"

//Based off of this video https://youtu.be/4m9RHfdUU_M?si=6krvFcmnm4Sp-taN
int main() {
    
    GLFWwindow* window;

    if (!glfwInit()) {
        std::cout << "GLFW couldn't start"
        return -1;
    }

    window = glfwCreateWindow(640, 480, "ASCII Shader", NULL, NULL);

    while (!glfwWindowShouldClose(window)) {

        glfwPollEvents();
        
    }

    return 0;
}