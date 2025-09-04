import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, type FormEvent } from "react"
import type { UserCreateDto } from "@/types/user-type"
import { signup } from "@/services/user-service"
import { useNavigate } from "react-router"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  
  const [user, setUser] = useState<UserCreateDto>({
    email: "maria@gmail.com",
    password: "senha123",
    city: "Cajazeiras",
    state: "PB",
    name: "maria",
    whatsapp: "+55 83 12345-1234",
  })

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newUser = await signup(user);

    if (newUser) {
      console.log(newUser);
      navigate("/auth/signin"); 
    }
    else {
      alert("Error no cadastro")
    }
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Signup</CardTitle>
          <CardDescription>
            Signup with this fast form 
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="state">UF</Label>
                  <Input
                    value={user.state}
                    onChange={(e) => setUser({ ...user, state: e.target.value })}
                    id="state"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="city">City</Label>
                  <Input
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                    id="city"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    id="name"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="whatsapp">Whatsapp</Label>
                  <Input
                    value={user.whatsapp}
                    onChange={(e) => setUser({ ...user, whatsapp: e.target.value })}
                    id="whatsapp"
                    type="tel"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
