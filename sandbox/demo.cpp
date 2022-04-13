#include<iostream>
using namespace std;

class Shape{
  public:
  int m_width;
  int m_height;
  Shape() {m_width=0;m_height=0;}
  void display()const;
};
class Rect: public Shape{
  public:
  Rect(int w, int h){m_width=w; m_height=h;};
  void display()const;
};
void Shape::display()const{
  cout<<"The Shape!"<<endl;
  cout<<"Width:"<<m_width<<"| Height:"<<m_height<<endl;
}
  void Rect::display()const{
  cout<<"The Rectangle!"<<endl;
  cout<<"Width:"<<m_width<<"| Height:"<<m_height<<endl;
  };




int main(){
   Shape sh;
   Rect rect(4,7);
   Shape* sh2=&sh;
   Shape* sh3=&rect;
   sh.display();
   rect.display();
   sh2->display();
   sh3->display();

  
    return 0;
}